/**
 * Render Keep-Alive Script
 * Prevents Render.com free tier services from spinning down after 15 minutes of inactivity.
 *
 * Usage:
 *   node scripts/keep-alive.js                              (uses RENDER_URL from env)
 *   node scripts/keep-alive.js https://my-app.onrender.com  (URL passed as argument)
 *   node scripts/keep-alive.js --loop                       (runs continuously every 14 minutes)
 */

const fs = require('fs');
const path = require('path');

// Try loading .env if exists without needing external dotenv package
try {
  const envPath = path.resolve(__dirname, '..', '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const [key, ...values] = trimmed.split('=');
      const val = values.join('=').trim().replace(/^["']|["']$/g, '');
      if (key && !process.env[key.trim()]) {
        process.env[key.trim()] = val;
      }
    });
  }
} catch (e) {
  // Ignore env read errors
}

// Arguments parsing
const args = process.argv.slice(2);
const isLoop = args.includes('--loop') || args.includes('-l');
const argUrl = args.find((arg) => arg.startsWith('http://') || arg.startsWith('https://'));

// Target URL resolution
const TARGET_URL =
  argUrl ||
  process.env.RENDER_URL ||
  process.env.SITE_URL ||
  process.env.URL;

// Interval (default: 14 minutes = 840,000 ms)
const INTERVAL_MINUTES = parseInt(process.env.PING_INTERVAL_MINUTES || '14', 10);
const INTERVAL_MS = INTERVAL_MINUTES * 60 * 1000;

function getTimestamp() {
  return new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
}

async function ping(url, attempt = 1, maxAttempts = 3) {
  const startTime = Date.now();
  console.log(`[${getTimestamp()}] [Attempt ${attempt}/${maxAttempts}] Pinging: ${url}`);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 45000); // 45s timeout

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Render-KeepAlive-Bot/1.0',
        'Accept': '*/*',
        'Cache-Control': 'no-cache',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const duration = Date.now() - startTime;

    console.log(
      `[${getTimestamp()}] Status: ${response.status} ${response.statusText} (${duration}ms)`
    );

    if (response.ok || (response.status >= 200 && response.status < 400)) {
      console.log(`[${getTimestamp()}] Keep-alive ping successful! Render service is active.`);
      return true;
    } else {
      console.warn(`[${getTimestamp()}] Warning: Server responded with status ${response.status}`);
      if (attempt < maxAttempts) {
        console.log(`[${getTimestamp()}] Retrying in 10 seconds...`);
        await new Promise((res) => setTimeout(res, 10000));
        return ping(url, attempt + 1, maxAttempts);
      }
      return false;
    }
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`[${getTimestamp()}] Ping failed after ${duration}ms: ${error.message}`);

    if (attempt < maxAttempts) {
      console.log(`[${getTimestamp()}] Retrying in 10 seconds...`);
      await new Promise((res) => setTimeout(res, 10000));
      return ping(url, attempt + 1, maxAttempts);
    }
    return false;
  }
}

async function main() {
  if (!TARGET_URL) {
    console.error('❌ Error: No target URL specified!');
    console.error('Please specify the URL using one of the following methods:');
    console.error('  1. Environment variable: RENDER_URL=https://your-site.onrender.com node scripts/keep-alive.js');
    console.error('  2. Command-line argument: node scripts/keep-alive.js https://your-site.onrender.com');
    console.error('  3. Add RENDER_URL=https://your-site.onrender.com to your .env file');
    process.exit(1);
  }

  console.log('='.repeat(60));
  console.log('🚀 Render Keep-Alive Service');
  console.log(`🎯 Target URL: ${TARGET_URL}`);
  console.log(`⏱️ Mode: ${isLoop ? `Continuous (Every ${INTERVAL_MINUTES} mins)` : 'Single Ping'}`);
  console.log('='.repeat(60));

  if (isLoop) {
    // Run immediately on start
    await ping(TARGET_URL);

    // Schedule subsequent pings
    setInterval(async () => {
      await ping(TARGET_URL);
    }, INTERVAL_MS);
  } else {
    const success = await ping(TARGET_URL);
    if (!success) {
      process.exitCode = 1;
    }
  }
}

main();
