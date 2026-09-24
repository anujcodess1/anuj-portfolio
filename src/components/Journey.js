import React from 'react';

function Journey() {
  const timelineSteps = [
    { step: '1', title: 'HTML & CSS', subtitle: 'Web structure & responsive design' },
    { step: '2', title: 'JavaScript', subtitle: 'Programming logic & DOM manipulation' },
    { step: '3', title: 'React', subtitle: 'Component-based UI development' },
    { step: '4', title: 'MERN Stack', subtitle: 'Node, Express & MongoDB backend' },
    { step: '5', title: 'AI Integration', subtitle: 'Building smarter applications' }
  ];

  return (
    <section className="section bg-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Progressive Roadmap</span>
          <h2 className="section-title">Learning Journey</h2>
          <p className="section-subtitle">
            The visual progression of skills from core web fundamentals to AI integration.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-connector"></div>
          {timelineSteps.map((item, index) => (
            <div key={index} className={`timeline-step ${index <= 2 ? 'active' : ''}`}>
              <div className="timeline-node">
                {item.step}
              </div>
              <div className="timeline-label">{item.title}</div>
              <div className="timeline-sub">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
