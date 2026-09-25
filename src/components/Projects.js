import React from 'react';

function Projects() {
  const upcomingProjects = [
    {
      title: 'First React Project',
      desc: 'An interactive frontend web app focusing on components, state with hooks, and clean UI.',
      tech: ['React', 'CSS', 'JavaScript']
    },
    {
      title: 'MERN Application',
      desc: 'A full-stack app connecting a React frontend with an Express/Node backend and MongoDB database.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      title: 'AI Web App',
      desc: 'A simple web tool that integrates AI APIs to explore smart features.',
      tech: ['React', 'AI APIs', 'Node.js']
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Future Builds</span>
          <h2 className="section-title">Projects Coming Soon</h2>
          <p className="section-subtitle">
            I'm currently building my first projects. This section will be updated as I complete them.
          </p>
        </div>

        <div className="projects-soon-grid">
          {upcomingProjects.map((item, index) => (
            <div key={index} className="project-soon-card">
              <span className="soon-card-badge">Coming Soon</span>
              <h3 className="soon-card-title">{item.title}</h3>
              <p className="soon-card-desc">{item.desc}</p>
              <div className="soon-tech-stack">
                {item.tech.map((t, tIdx) => (
                  <span key={tIdx} className="soon-tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
