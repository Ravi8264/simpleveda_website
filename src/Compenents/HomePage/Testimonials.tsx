import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    image: 'https://i.pravatar.cc/150?img=12',
    name: 'He Pan (何 畔)',
    title: 'MBA, Retired HR Manager | Shenyang, China',
    quote:
      'The Gita course is highly authoritative, well-structured and story-filled, with very clear, concise, and easy to understand explanations. I really loved the vivid narrations and I especially found the PowerPoint presentations exquisitely attractive.',
  },
  {
    image: 'https://i.pravatar.cc/150?img=47',
    name: 'Kankana Kar',
    title: 'Yoga Teacher and Therapist | Bangalore, India',
    quote:
      'I have taken up 2 live courses and 2 YouTube courses with Simple Vedas. All were very enlightening and illuminating. These courses are really substantial and life-altering. I haven\'t been the same person I was before I took them. Madhusudana Visnu Das and his life lessons have been the go-to person / point for any complexities I have in life. He is very down to earth who is always there to help even with his busy schedule. I would strongly recommend everyone to go ahead and take up the courses and just watch your life transform.',
  },
  {
    image: 'https://i.pravatar.cc/150?img=33',
    name: 'Akshay Gupta',
    title: 'Student, Human Resource Management | Delhi, India',
    quote:
      'Simple Vedas is a platform where I have found a complete package of our Vedic wisdom. Personally, I have learnt so many philosophical concepts and also the tools to apply the teachings in my life. It is the teacher\'s wonderful and pragmatic teaching that everyone can learn from these courses, beginners or pundits.',
  },
  {
    image: 'https://i.pravatar.cc/150?img=20',
    name: 'Daya Rupa Devi Dasi',
    title: 'Entrepreneur | Ghana, Africa',
    quote:
      'It is said that the more we learn, the more we realize we know nothing. Every time I attend a course, or hear a talk, or even simply read a quote, I get to learn so much. I have been much enlightened on the path of bhakti after joining Simple Vedas.',
  },
  {
    image: 'https://i.pravatar.cc/150?img=68',
    name: 'Govardhanadhari Das',
    title: 'ISKCON Monk, Preacher in Arab countries | Vrindavan, India',
    quote:
      'The study of the Bhagavad Gita and other important scriptures that Madhusudana Vishnu Prabhu is teaching online is ideal for today\'s people, who are engaged in different daily activities; his teaching system is easy, practical, interactive and analytical.',
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isTransitioningRef = useRef(false);

  // Triple testimonials for seamless infinite loop
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Auto-slide every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isTransitioningRef.current) {
        setCurrentSlide((prev) => prev + 1);
      }
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle smooth infinite loop
  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = 100 / extendedTestimonials.length;
      const offset = currentSlide * slideWidth;
      
      isTransitioningRef.current = true;
      carouselRef.current.style.transition = 'transform 1000ms ease-in-out';
      carouselRef.current.style.transform = `translateX(-${offset}%)`;

      // Reset position seamlessly when reaching the second set
      if (currentSlide >= testimonials.length * 2) {
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none';
            const resetPosition = testimonials.length * (100 / extendedTestimonials.length);
            carouselRef.current.style.transform = `translateX(-${resetPosition}%)`;
            setCurrentSlide(testimonials.length);
            isTransitioningRef.current = false;
          }
        }, 1000);
      } else {
        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 1000);
      }
    }
  }, [currentSlide]);

  const handleSlideChange = (index : number) => {
    if (isTransitioningRef.current) return;
    
    setCurrentSlide(testimonials.length + index);
    
    // Reset interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (!isTransitioningRef.current) {
          setCurrentSlide((prev) => prev + 1);
        }
      }, 4000);
    }, 1000);
  };

  const getActiveDotIndex = () => {
    return currentSlide % testimonials.length;
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="header-line"></div>
          <h2 className="testimonials-title">
            Hear it from{' '}
            <span className="title-highlight">Our Students</span>
          </h2>
          <div className="header-line"></div>
        </div>

        {/* Infinite Carousel Container */}
        <div className="carousel-wrapper">
          <div
            ref={carouselRef}
            className="carousel-track"
            style={{
              width: `${extendedTestimonials.length * 100}%`,
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-slide"
                style={{ width: `${100 / extendedTestimonials.length}%` }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <h3 className="testimonial-name">
                  {testimonial.name}
                </h3>
                <p className="testimonial-title">
                  {testimonial.title}
                </p>

                {/* Quote Icon */}
                <svg
                  className="quote-icon"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>

                <p className="testimonial-quote">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="navigation-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`dot ${index === getActiveDotIndex() ? 'dot-active' : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;