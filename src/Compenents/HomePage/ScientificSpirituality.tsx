import React from 'react';
import './ScientificSpirituality.css';

const ScientificSpirituality = () => {
  const mediaContent = [
    {
      type: 'image',
      src: 'https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/03/12.jpg?fit=630%2C450&ssl=1',
      alt: 'Does God Exist?',
      title: 'DOES GOD EXIST',
      titlePosition: 'top',
      titleBgColor: 'transparent',
      titleColor: '#000000',
      link: 'https://simplevedas.com/english-videos/',
    },
    {
      type: 'image',
      src: 'https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/02/11-1.jpg?fit=630%2C450&ssl=1',
      alt: 'Goloka Vrindavan',
      title: 'Goloka Vrindavan',
      titleBgColor: '#fbc02d',
      titlePosition: 'bottom',
      titleColor: '#212121',
      link: 'https://simplevedas.com/english-videos/',
    },
    {
      type: 'image',
      src: 'https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/03/13.jpg?fit=630%2C450&ssl=1',
      alt: 'Sri Nrsimha Kavacha Mantra',
      title: 'Sri Nrsimha Kavacha Mantra',
      titlePosition: 'bottom',
      titleBgColor: 'transparent',
      titleColor: '#000000',
      link: 'https://simplevedas.com/english-videos/',
    },
    {
      type: 'image',
      src: 'https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/03/4-1.jpg?fit=630%2C450&ssl=1',
      alt: 'Mitra',
      title: 'मित्रता',
      titlePosition: 'bottom',
      titleBgColor: '#fbc02d',
      titleColor: '#212121',
      link: 'https://simplevedas.com/english-videos/',
    },
  ];

  return (
    <div className="scientific-spirituality-container">
      <div className="content-wrapper">
        {/* Left Section: Text Content */}
        <div className="text-section">
          <h2 className="section-title">Scientific Spirituality</h2>
          <div className="spacer"></div>
          <p className="section-description">
            Scientific study is not limited to the realm of material or physical. It is
            also equally valid, if not more, in the metaphysical and spiritual arena.
            At Simple Vedas, we learn the vast and rich Science of Spirituality.
          </p>
          <div className="button-container">
            <a
              href="https://simplevedas.com/english-videos/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Check our Video Gallery
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="arrow-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
          <div className="spacer"></div>
        </div>

        {/* Right Section: Image Grid */}
        <div className="image-grid-section">
          {/* First Row */}
          <div className="grid-row">
            {mediaContent.slice(0, 2).map((item, index) => (
              <a
                key={index}
                href={item.link || 'https://simplevedas.com/english-videos/'}
                target="_blank"
                rel="noopener noreferrer"
                className="media-card"
                style={{ backgroundColor: item.titleBgColor || 'transparent' }}
              >
                {item.type === 'image' && (
                  <>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="media-image"
                    />
                    <div className="hover-overlay"></div>
                    <div className="play-button-overlay">
                      <div className="play-button-wrapper">
                        <div className="play-button-outer"></div>
                        <div className="play-button-inner">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#ffc13c"
                            className="play-icon"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* {item.title && (
                      // <div
                      //   className={`media-title ${item.titlePosition === 'bottom' ? 'title-bottom' : 'title-top'}`}
                      //   style={{
                      //     backgroundColor: item.titleBgColor === 'transparent' ? 'transparent' : (item.titleBgColor || 'rgba(0,0,0,0.5)'),
                      //     color: item.titleColor || (item.titleBgColor ? '#212121' : 'white'),
                      //   }}
                      // >
                      //   {item.title}
                      // </div>
                    )} */}
                  </>
                )}
              </a>
            ))}
          </div>
          
          {/* Second Row */}
          <div className="grid-row">
            {mediaContent.slice(2, 4).map((item, index) => (
              <a
                key={index + 2}
                href={item.link || 'https://simplevedas.com/english-videos/'}
                target="_blank"
                rel="noopener noreferrer"
                className={`media-card ${index === 1 ? 'hide-mobile' : ''}`}
                style={{ backgroundColor: item.titleBgColor || 'transparent' }}
              >
                {item.type === 'image' && (
                  <>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="media-image"
                    />
                    <div className="hover-overlay"></div>
                    <div className="play-button-overlay">
                      <div className="play-button-wrapper">
                        <div className="play-button-outer"></div>
                        <div className="play-button-inner">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#ffc13c"
                            className="play-icon"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* {item.title && (
                      <div
                        className={`media-title ${item.titlePosition === 'bottom' ? 'title-bottom' : 'title-top'}`}
                        style={{
                          backgroundColor: item.titleBgColor === 'transparent' ? 'transparent' : (item.titleBgColor || 'rgba(0,0,0,0.5)'),
                          color: item.titleColor || (item.titleBgColor ? '#212121' : 'white'),
                        }}
                      >
                        {item.title}
                      </div>
                    )} */}
                  </>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientificSpirituality;