import "./WelcomeSection.css";
export default function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        {/* Title - shows first on mobile, hidden on desktop */}
        <h2 className="welcome-title mobile-only">
          Welcome to Simple Vedas
        </h2>
        
        <div className="welcome-content">
          {/* Image - shows second on mobile */}
          <div className="welcome-image-container">
            <img 
              src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/07/2-1.jpg?w=1080&ssl=1" 
              alt="Guru Ji" 
              className="welcome-image"
            />
          </div>
          
          {/* Text Content */}
          <div className="welcome-text-content">
            {/* Right border */}
            <div className="welcome-border"></div>
            
            {/* Title - hidden on mobile, shown on desktop */}
            <h2 className="welcome-title desktop-only">
              Welcome to Simple Vedas
            </h2>
            
            {/* Orange underline */}
            <div className="welcome-underline desktop-only">
              <div className="underline-long"></div>
              <div className="underline-short"></div>
            </div>
            
            <h3 className="welcome-subtitle desktop-only">
              Making Spirituality Simple for You
            </h3>
            
            <p className="welcome-description">
              Simple Vedas is to serve as a bridge between the ancient and the modern, between the spiritual and the material, between the philosophy and the practice, so that one can easily understand, appreciate, and apply the Vedic technologies in one's life, bringing to it more meaning and content, and thus enjoy the bliss that we all are really made for.
            </p>
            
            {/* Read More Button */}
            <div className="welcome-button-container">
              <button 
                type="button"
                className="welcome-button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                Read More
                <span className="button-arrow">»</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}