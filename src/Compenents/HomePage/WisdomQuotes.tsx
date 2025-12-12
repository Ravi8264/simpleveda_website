import React from 'react';
import { Link } from 'react-router';
import './WisdomQuotes.css';

const quotes = [
  {
    img: 'https://simplevedas.com/wp-content/uploads/2022/02/1-1024x1024.png',
  },
  {
    img: 'https://simplevedas.com/wp-content/uploads/2022/02/21-1024x1024.jpg',
  },
  {
    img: 'https://simplevedas.com/wp-content/uploads/2022/02/20-1024x1024.png',
  },
  {
    img: 'https://simplevedas.com/wp-content/uploads/2022/02/28-1024x1024.png',
  },
];

const WisdomQuotes = () => {
  return (
    <section className="wisdom-quotes-section">
      <div className="wisdom-quotes-container">

        {/* Heading - SimpleVedas Style */}
        <div className="heading-wrapper">
          <div className="heading-content">
            <div className="heading-line"></div>
            <h2 className="heading-title">
              Wisdom <span className="heading-highlight">Quotes</span>
            </h2>
            <div className="heading-line"></div>
          </div>
        </div>

        {/* 4 Quotes Grid */}
        <div className="quotes-grid">
          {quotes.map((quote, index) => (
            <Link 
              to="/quotes" 
              key={index} 
              className="quote-link"
            >
              <div className="quote-card">
                
                {/* Image */}
                <img
                  src={quote.img}
                  alt="Wisdom quote"
                  className="quote-image"
                />

                {/* Subtle Golden Border on Hover */}
                <div className="quote-border"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* See More Button */}
        <div className="see-more-wrapper">
          <Link 
            to="/quotes"
            className="see-more-link"
          >
            <span className="bracket-left">[</span>
            <span>See More</span>
            <span className="bracket-right">]</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WisdomQuotes;