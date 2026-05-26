import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-icon">◆</span>
              <span>Luxe Estates</span>
            </div>
            <p className="footer-desc">
              Premium real estate consultancy helping families find their dream
              homes across India. Trusted by 500+ homebuyers since 2014.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">f</a>
              <a href="#" className="social-link" aria-label="Instagram">ig</a>
              <a href="#" className="social-link" aria-label="YouTube">yt</a>
              <a href="#" className="social-link" aria-label="LinkedIn">in</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#hero">Home</a>
              <a href="#featured">Properties</a>
              <a href="#about">About Us</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Column 3: Property Types */}
          <div className="footer-col">
            <h4>Property Types</h4>
            <div className="footer-links">
              <a href="#categories">Apartments</a>
              <a href="#categories">Villas & Houses</a>
              <a href="#categories">Plots & Land</a>
              <a href="#categories">Commercial</a>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>123 Business Park, MG Road, Pune, Maharashtra 411001</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+91 99999 99999</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@luxeestates.in</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <span>Mon – Sat: 10 AM – 7 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Luxe Estates. All Rights Reserved.</p>
          <p>
            Crafted with ♥ by <a href="#">Luxe Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
