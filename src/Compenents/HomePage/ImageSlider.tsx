import PageBanner from "../../assets/images/home-page-banners.png";
import gitaCourse from "../../assets/images/gita-course.jpg";
import courseApp from "../../assets/images/course-app.jpg";
import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const originalImages = [PageBanner, gitaCourse, courseApp];

export default function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Clone: [last, ...original, first]
    const images = [originalImages[originalImages.length - 1], ...originalImages, originalImages[0]];

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(prev => prev + 1);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(prev => prev - 1);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        
        // If at cloned last image (end)
        if (currentSlide === images.length - 1) {
            setCurrentSlide(1);
        }
        // If at cloned first image (beginning)
        else if (currentSlide === 0) {
            setCurrentSlide(images.length - 2);
        }
    };

    return (
        <div className="first">
            {/* Images Container */}
            <div 
                className="second" 
                style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {images.map((image, index) => (
                    <div className="third" key={index}>
                        <img src={image} alt={`Slide ${index}`}/>
                    </div>
                ))}
            </div>

            {/* Left Right Buttons */}
            <div className="buttons">
                <div className="left" onClick={handlePrev}>
                    &#10094; {/* Left arrow symbol */}
                </div>
                <div className="right" onClick={handleNext}>
                    &#10095; {/* Right arrow symbol */}
                </div>
            </div>
        </div>
    );
}