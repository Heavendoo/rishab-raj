import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '../data/properties';
import './Testimonials.css';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Real stories from real homeowners who trusted Rajat Properties</p>
        </div>

        <div className="testimonial-slider">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <img
                  src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&sig=${testimonial.id}`}
                  alt={testimonial.name}
                  className="client-photo"
                />
                <div className="stars">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="review-text">{testimonial.review}</p>
                <h4 className="client-name">{testimonial.name}</h4>
                <p className="client-property">{testimonial.property}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
