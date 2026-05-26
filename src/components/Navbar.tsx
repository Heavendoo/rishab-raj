import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="logo-icon">◆</span>
          <span>Rajat Properties</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
          <a href="#featured" onClick={(e) => handleNavClick(e, 'featured')}>Properties</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Reviews</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/918690906006?text=Hi%2C%20I%20am%20interested%20in%20a%20property"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-cta anim-pulse-glow"
        >
          Schedule Visit
        </a>

        {/* Hamburger */}
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
        <a href="#featured" onClick={(e) => handleNavClick(e, 'featured')}>Properties</a>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
        <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Reviews</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        <a
          href="https://wa.me/918690906006?text=Hi%2C%20I%20am%20interested%20in%20a%20property"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Schedule Visit
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
