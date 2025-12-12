import { useState, useEffect, useRef } from "react";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Globe } from "lucide-react";
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import coursesImg from "../../../assets/images/course.png";
import "./CoursePage.css";

const courses = [
  { 
    image: coursesImg, 
    headline: "Madhurya Kadambini Course",
    subheadline: "Special Offer",
    title: "Madhurya Kadambini", 
    duration: "Ongoing", 
    language: ["Bhakti, Hindi"], 
    price: "400", 
    originalPrice: "1400", 
    startDate: "May 23", 
    rating: 4.5 
  },
  { 
    image: coursesImg, 
    headline: "Self-Paced Learning",
    subheadline: "Learn at Your Pace",
    title: "Madhurya Kadambini", 
    duration: "Self-paced", 
    language: ["Bhakti"], 
    price: "400", 
    originalPrice: "1400", 
    startDate: "May 23", 
    rating: 4.5 
  },
  { 
    image: coursesImg, 
    headline: "Prabhupada Teachings",
    subheadline: "Coming Soon",
    title: "Prabhupada", 
    duration: "Upcoming", 
    language: ["Bhakti English"], 
    price: "Free", 
    originalPrice: "1400", 
    startDate: "May 23", 
    rating: 4.5 
  },
  { 
    image: coursesImg, 
    headline: "Ancient Wisdom",
    subheadline: "Philosophy Course",
    title: "Bhagavad Gita", 
    duration: "Past", 
    language: ["Philosophy"], 
    price: "500", 
    originalPrice: "1500", 
    startDate: "May 23", 
    rating: 1.5
  },
  { 
    image: coursesImg, 
    headline: "Wellness Program",
    subheadline: "Mind & Body",
    title: "Yoga and Meditation", 
    duration: "Past", 
    language: ["Wellness"], 
    price: "300", 
    originalPrice: "1400", 
    startDate: "May 23", 
    rating: 4.5 
  },
  { 
    image: coursesImg, 
    headline: "Learn Sanskrit",
    subheadline: "Beginner Friendly",
    title: "Sanskrit Basics", 
    duration: "Upcoming", 
    language: ["Bhakti English"], 
    price: "Free", 
    originalPrice: "1400", 
    startDate: "May 23", 
    rating: 4.5 
  },
];

// CourseCard Component
interface CourseCardProps {
  image: string;
  headline: string;
  subheadline: string;
  title: string;
  startDate: string;
  duration: string;
  language: string[];
  price: string;
  onViewDetails?: () => void;
  onRegister?: () => void;
  originalPrice: string;
  rating?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  headline,
  subheadline,
  title,
  startDate,
  duration,
  language,
  price,
  onViewDetails = () => {},
  onRegister = () => {},
  originalPrice,
  rating = 4.5,
}) => {
  return (
    <div className="course-card">
      {/* Image with overlay text */}
      <div className="course-card-image-container">
        <img
          src={image}
          alt={title}
          className="course-card-image"
        />

        {/* Overlay */}
        <div className="course-card-overlay">
          <h3 className="course-card-headline">
            {headline || title}
          </h3>

          {subheadline && (
            <span className="course-card-subheadline">
              {subheadline}
            </span>
          )}

          <span className="course-card-arrow">▼</span>
        </div>
      </div>

      {/* Content */}
      <div className="course-card-content">
        <div className="course-card-content-inner">
          {/* Title */}
          <h4 className="course-card-title">
            {title}
          </h4>
          
          <div className="course-card-rating">
            <div className="course-card-stars">
              {[1, 2, 3, 4, 5].map((star) => {
                const normalizedRating = Math.max(0, Math.min(5, rating));
                const filled = star <= normalizedRating;
                const halfFilled = star - 0.5 <= normalizedRating && star > normalizedRating;
                
                return (
                  <span key={star} className="star-wrapper">
                    {filled ? (
                      <StarIcon className="star-icon star-filled" />
                    ) : halfFilled ? (
                      <span className="star-half-wrapper">
                        <StarIconOutline className="star-icon star-outline" />
                        <span className="star-half-overlay">
                          <StarIcon className="star-icon star-filled" />
                        </span>
                      </span>
                    ) : (
                      <StarIconOutline className="star-icon star-empty" />
                    )}
                  </span>
                );
              })}
            </div>
          </div>
          
          {/* Info Row */}
          <div className="course-card-info">
            <span className="info-badge">
              <CalendarDaysIcon className="info-icon" />
              {startDate}
            </span>
            <span className="info-badge">
              <ClockIcon className="info-icon" />
              {duration}
            </span>
            <span className="info-badge info-badge-language">
              <Globe className="info-icon" />
              <span className="info-badge-text">{Array.isArray(language) ? language.join(", ") : language}</span>
            </span>
          </div>

          {/* Description */}
          <p className="course-card-description">
            Learn yoga philosophy, asanas and meditations to take charge of your joy!
          </p>
        </div>

        {/* Buttons */}
        <div className="course-card-footer">
          <div className="course-card-price">
            {price === "Free" ? (
              <>
                <span className="price-original">
                  ₹{originalPrice}
                </span>
                <span className="price-current">
                  {price}
                </span>
              </>
            ) : (
              <>
                <span className="price-original">
                  ₹{originalPrice}
                </span>
                <span className="price-current">
                  ₹{price}
                </span>
              </>
            )}
          </div>

          <button
            onClick={onViewDetails}
            className="course-card-button"
          >
            Details
          </button>
          <button
            onClick={onRegister}
            className="course-card-button"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

// Main CoursesPage Component
const CoursesPage = () => {
  const extendedCourses = [
    courses[courses.length - 2],
    courses[courses.length - 1],
    ...courses,
    courses[0],
    courses[1],
  ];
  
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex - 1;
      if (prev < 2) {
        setTimeout(() => {
          setIsTransitioning(false);
          requestAnimationFrame(() => {
            setCurrentIndex(extendedCourses.length - 4);
            requestAnimationFrame(() => {
              setIsTransitioning(true);
            });
          });
        }, 700);
        return prev;
      }
      return prev;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= extendedCourses.length - 2) {
        setTimeout(() => {
          setIsTransitioning(false);
          requestAnimationFrame(() => {
            setCurrentIndex(2);
            requestAnimationFrame(() => {
              setIsTransitioning(true);
            });
          });
        }, 700);
        return nextIndex;
      }
      return nextIndex;
    });
  };

  const goToSlide = (index : any) => {
    setCurrentIndex(index + 2);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= extendedCourses.length - 2) {
          setTimeout(() => {
            setIsTransitioning(false);
            requestAnimationFrame(() => {
              setCurrentIndex(2);
              requestAnimationFrame(() => {
                setIsTransitioning(true);
              });
            });
          }, 700);
          return nextIndex;
        }
        return nextIndex;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [extendedCourses.length]);

  return (
    <div className="courses-page">
      {/* Header */}
      <div className="courses-header">
        <div className="courses-header-title-wrapper">
          <div className="courses-header-line"></div>
          <h2 className="courses-header-title">
            Our <span className="courses-header-highlight">Courses</span>
          </h2>
          <div className="courses-header-line"></div>
        </div>
        <p className="courses-header-subtitle">
          Learn as never before
        </p>
      </div>

      {/* Carousel */}
      <div className="courses-carousel">
        {/* Carousel wrapper */}
        <div className="carousel-overflow">
          {/* Cards container */}
          <div
            ref={carouselRef}
            className={`carousel-track ${isTransitioning ? 'carousel-transitioning' : 'carousel-no-transition'}`}
            style={{
              gap: '1.5rem',
              transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 0.5}rem))`
            }}
          >
            {extendedCourses.map((course, index) => (
              <div
                key={index}
                className="carousel-item"
                style={{ width: 'calc((100% - 3rem) / 3)' }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>

        {/* Slider indicators */}
        <div className="carousel-indicators">
          {courses.map((_, index) => {
            let actualIndex = currentIndex - 2;
            if (actualIndex < 0) actualIndex = courses.length + actualIndex;
            if (actualIndex >= courses.length) actualIndex = actualIndex % courses.length;
            
            const isActive = (index >= actualIndex && index < actualIndex + 3) || 
              (actualIndex + 3 > courses.length && index < (actualIndex + 3) % courses.length);
            
            return (
              <button
                key={index}
                type="button"
                className={`carousel-indicator ${isActive ? 'carousel-indicator-active' : ''}`}
                onClick={() => goToSlide(index)}
              ></button>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <div className="carousel-nav">
          <button
            type="button"
            onClick={goToPrevious}
            className="carousel-nav-button"
          >
            <span className="carousel-nav-icon carousel-nav-icon-left">
              <svg className="carousel-nav-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h21" />
              </svg>
            </span>
            <span className="carousel-nav-text">Prev</span>
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="carousel-nav-button"
          >
            <span className="carousel-nav-text">Next</span>
            <span className="carousel-nav-icon carousel-nav-icon-right">
              <svg className="carousel-nav-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;