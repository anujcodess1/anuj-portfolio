import React, { useState } from 'react';

function Navbar({ isDarkMode, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#home" className="nav-logo">
          <span className="nav-logo-dot"></span>
          Anuj
        </a>

        <div className="nav-right-items">
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
            <a href="#learning" className="nav-link" onClick={closeMenu}>Learning</a>
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </div>

          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <img
              src={isDarkMode ? '/images/icons/sun.svg' : '/images/icons/moon.svg'}
              alt={isDarkMode ? 'Sun' : 'Moon'}
              className="theme-icon"
            />
            <span className="theme-toggle-text">{isDarkMode ? 'Light' : 'Dark'}</span>
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
          >
            <img
              src={mobileMenuOpen ? '/images/icons/close.svg' : '/images/icons/menu.svg'}
              alt={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="menu-icon"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
