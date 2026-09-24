import React from 'react';

function Skills() {
  const skillsData = [
    { name: 'HTML', status: 'Knowledge', icon: '/images/icons/html.svg' },
    { name: 'CSS', status: 'Knowledge', icon: '/images/icons/css.svg' },
    { name: 'JavaScript', status: 'Knowledge', icon: '/images/icons/javascript.svg' },
    { name: 'React', status: 'Learning', icon: '/images/icons/react.svg' },
    { name: 'MongoDB', status: 'Learning', icon: '/images/icons/mongodb.svg' },
    { name: 'Express.js', status: 'Learning', icon: '/images/icons/express.svg' },
    { name: 'Node.js', status: 'Learning', icon: '/images/icons/nodejs.svg' },
    { name: 'AI', status: 'Learning', icon: '/images/icons/ai.svg' }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Abilities</span>
          <h2 className="section-title">Skills Overview</h2>
          <p className="section-subtitle">
            An honest overview of what I know and what I am actively learning right now.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-left">
                <span className="skill-icon">
                  <img src={skill.icon} alt={skill.name} />
                </span>
                <span className="skill-name">{skill.name}</span>
              </div>
              <span
                className={`skill-badge ${
                  skill.status === 'Knowledge' ? 'knowledge' : 'learning'
                }`}
              >
                {skill.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
