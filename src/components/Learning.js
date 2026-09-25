import React from 'react';

function Learning() {
  const learningTracks = [
    {
      title: 'MERN Stack',
      icon: '/images/icons/mern.svg',
      desc: 'Learning how to build web apps with database, server, APIs, and React frontend.',
      topics: ['MongoDB', 'Express.js', 'React', 'Node.js']
    },
    {
      title: 'AI Development',
      icon: '/images/icons/ai-dev.svg',
      desc: 'Exploring AI tools and APIs to add smart features to web projects.',
      topics: ['AI APIs', 'Prompt Engineering', 'AI Tools', 'Smart Web Apps']
    },
    {
      title: 'Frontend',
      icon: '/images/icons/frontend.svg',
      desc: 'Creating clean, responsive web pages that look good on mobile and desktop.',
      topics: ['HTML & CSS', 'JavaScript', 'React Basics', 'Responsive Design']
    }
  ];

  return (
    <section id="learning" className="section bg-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Focus Areas</span>
          <h2 className="section-title">Currently Learning</h2>
          <p className="section-subtitle">
            A simple overview of the technologies I am practicing right now at DUCAT.
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
