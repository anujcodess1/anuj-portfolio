import React from 'react';

function About() {
  return (
    <section id="about" className="section bg-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Introduction</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text-content">
            <p>
              I'm currently learning the MERN stack and exploring AI development at <strong>DUCAT Gurugram</strong>.
              I started with HTML, CSS and JavaScript and am now working toward building complete web applications.
            </p>
            <p>
              I'm still at the learning stage, so this portfolio is less about showing a huge list of finished projects
              and more about documenting the skills I'm building.
            </p>
          </div>

          <div className="about-cards-list">
            <div className="about-info-card">
              <span className="about-card-icon">
                <img src="/images/icons/education.svg" alt="Training Institute" />
              </span>
              <div>
                <div className="about-card-title">Training Institute</div>
                <div className="about-card-desc">DUCAT Gurugram</div>
              </div>
            </div>

            <div className="about-info-card">
              <span className="about-card-icon">
                <img src="/images/icons/lightbulb.svg" alt="Current Skills" />
              </span>
              <div>
                <div className="about-card-title">Current Skills</div>
                <div className="about-card-desc">HTML, CSS, JavaScript</div>
              </div>
            </div>

            <div className="about-info-card">
              <span className="about-card-icon">
                <img src="/images/icons/rocket.svg" alt="Expanding Knowledge" />
              </span>
              <div>
                <div className="about-card-title">Expanding Knowledge Into</div>
                <div className="about-card-desc">React, Node, Express, Mongo &amp; AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
