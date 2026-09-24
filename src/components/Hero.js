import React, { useState } from 'react';

function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-text-col">
          <div className="hero-tag">
            <span className="hero-tag-dot"></span>
            DUCAT Gurugram • Active Learner
          </div>

          <h1 className="hero-title">
            Hi, I'm Anuj
          </h1>

          <div className="hero-subtitle">
            MERN Stack + AI Learner
          </div>

          <p className="hero-description">
            I'm learning to build modern web applications and exploring how AI can make them smarter.
          </p>

          <div className="hero-actions">
            <a href="#skills" className="btn-primary">
              View Skills
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-photo-col">
          <div className="frameless-portrait-wrapper">
            <div className="frameless-portrait-img-box">
              {!imgError ? (
                <img
                  src="/images/anuj2-removebg-preview.png"
                  alt="Anuj - MERN Stack and AI Learner"
                  className="frameless-portrait-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="profile-img-fallback">
                  <img src="/images/icons/avatar.svg" alt="Avatar" className="fallback-avatar-img" />
                  <span>Anuj's Photo</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
