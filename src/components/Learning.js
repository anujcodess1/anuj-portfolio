import React from 'react';

function Learning() {
  const learningTracks = [
    {
      title: 'MERN Stack',
      icon: '/images/icons/mern.svg',
      desc: 'Building full-stack web applications with database, server, API routing, and reactive UI.',
      topics: ['MongoDB', 'Express.js', 'React', 'Node.js']
    },
    {
      title: 'AI Development',
      icon: '/images/icons/ai-dev.svg',
      desc: 'Exploring artificial intelligence capabilities to create smarter, interactive web tools.',
      topics: ['AI APIs', 'AI Integration', 'Prompt Engineering', 'AI-powered Web Applications']
    },
    {
      title: 'Frontend',
      icon: '/images/icons/frontend.svg',
      desc: 'Creating accessible, responsive, component-driven user interfaces with modern practices.',
      topics: ['React', 'JavaScript', 'Responsive UI', 'Component-based development']
    }
  ];

  return (
    <section id="learning" className="section bg-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Focus Areas</span>
          <h2 className="section-title">Currently Learning</h2>
          <p className="section-subtitle">
            A closer look at the key concepts and technologies I am exploring at DUCAT.
          </p>
        </div>

        <div className="learning-cards-grid">
          {learningTracks.map((track, index) => (
            <div key={index} className="learning-card">
              <div className="learning-card-header">
                <span className="learning-card-icon">
                  <img src={track.icon} alt={track.title} />
                </span>
                <h3 className="learning-card-title">{track.title}</h3>
              </div>
              <p className="learning-card-desc">{track.desc}</p>
              <div className="learning-topics-list">
                {track.topics.map((topic, tIndex) => (
                  <div key={tIndex} className="learning-topic-item">
                    <span className="topic-bullet">▸</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learning;
