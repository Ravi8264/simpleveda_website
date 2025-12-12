import React from 'react';
import './SimpleVedasSection.css';

const SimpleVedasSection = () => {
  const bg = 'https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/03/composition-with-happy-emotion-scaled.jpg?fit=1503%2C1080&ssl=1';

  const featureBoxes = [
    {
      iconClass: 'fas fa-graduation-cap',
      title: 'Systematic',
      description: 'Our courses are well-designed and extremely structured.',
    },
    {
      iconClass: 'fas fa-question',
      title: 'Quiz',
      description: 'We not only teach you, but also make sure you learn.',
    },
    {
      iconClass: 'fab fa-gratipay',
      title: 'Free Learning',
      description: 'Except a few, all our courses are either free or minimally charged.',
    },
    {
      iconClass: 'far fa-lightbulb',
      title: 'Practical',
      description: 'Knowledge is of true value only when theory is turned into practical.',
    },
    {
      iconClass: 'fas fa-bars',
      title: '4 Levels',
      description: 'Basic (Level 1) to Pro (Level 4) levels of learning the subjects.',
    },
    {
      iconClass: 'fas fa-hourglass-start',
      title: 'Pace',
      description: 'You decide the pace at which you are comfortable to learn.',
    },
  ];

  return (
    <div
      className="vedas-section"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Overlay */}
      <div className="vedas-overlay"></div>

      {/* Content */}
      <div className="vedas-content">
        {/* Title */}
        <h2 className="vedas-title">
          Why Simple Vedas?
        </h2>

        {/* Grid */}
        <div className="vedas-grid">
          {featureBoxes.map((feature, index) => (
            <div key={index} className="feature-box">
              {/* Icon + Title */}
              <div className="feature-content">
                <div className="feature-icon">
                  <i className={`${feature.iconClass}`}></i>
                </div>

                <h3 className="feature-title">
                  {feature.title}
                </h3>

                <div className="feature-divider"></div>

                {/* Description */}
                <p className="feature-description">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleVedasSection;