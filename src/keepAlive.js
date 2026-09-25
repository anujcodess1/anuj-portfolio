/**
 * Render Keep-Alive Client-Side Service
 * Periodically pings the site/service every 12 minutes to prevent Render free-tier
 * instances from spinning down due to the 15-minute inactivity timeout.
 */

const PING_INTERVAL_MS = 12 * 60 * 1000; // 12 minutes

export function initKeepAlive() {
  if (typeof window === 'undefined') return;

  // Uses REACT_APP_RENDER_URL if set, or the deployed site's origin
  const targetUrl =
    process.env.REACT_APP_RENDER_URL ||
    (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'
      ? window.location.origin
      : null);

  if (!targetUrl) {
    return;
  }

  let lastPingTime = Date.now();

  const pingServer = async () => {
    try {
      lastPingTime = Date.now();
      await fetch(`${targetUrl}?_keepalive=${Date.now()}`, {
        method: 'GET',
        cache: 'no-store',
        mode: 'no-cors',
      });
    } catch (e) {
      // Fail silently to avoid disturbing the user experience
    }
  };

  // Initial ping 15 seconds after page load
  const initialTimeout = setTimeout(pingServer, 15000);

  // Periodic keep-alive ping every 12 minutes
  const intervalId = setInterval(pingServer, PING_INTERVAL_MS);

  // Wake-up ping when user returns to tab after a long idle period
  const onVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      if (Date.now() - lastPingTime >= PING_INTERVAL_MS) {
        pingServer();
      }
    }
  };

  document.addEventListener('visibilitychange', onVisibilityChange);

  return () => {
    clearTimeout(initialTimeout);
    clearInterval(intervalId);
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
}
