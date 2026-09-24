import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Learning from './components/Learning';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useLenisSmoothScroll from './hooks/useLenisSmoothScroll';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize Lenis smooth scroll engine configured for 90-120 FPS
  useLenisSmoothScroll();

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Dynamically update favicon to match the website theme:
  // Light mode -> White + Royal Blue (#2563eb)
  // Dark mode  -> Black + Electric Blue (#3b82f6)
  useEffect(() => {
    let faviconLink = document.getElementById('app-favicon') || document.querySelector("link[rel*='icon']");
    if (faviconLink) {
      faviconLink.href = isDarkMode ? '/favicon-dark.svg' : '/favicon-light.svg';
    }
  }, [isDarkMode]);

  useEffect(() => {
    // High-performance scroll reveal using passive IntersectionObserver
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      section.classList.add('smooth-reveal');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`portfolio-app ${isDarkMode ? 'dark-theme' : ''}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Learning />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
