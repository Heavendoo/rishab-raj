import { useState, useEffect } from 'react';
import Chatbot from './Chatbot';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* AI Chatbot */}
      <Chatbot />

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/918690906006?text=Hi%2C%20I%20am%20interested%20in%20a%20property"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      {/* Back to Top */}
      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
};

export default FloatingButtons;
