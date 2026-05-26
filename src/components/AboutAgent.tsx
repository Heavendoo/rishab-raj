import './AboutAgent.css';

const AboutAgent = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
              alt="Luxe Estates - Real Estate Expert"
              className="about-image"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="about-content">
            <span className="about-label">✦ About Us</span>
            <h2 className="about-name">Luxe Estates</h2>
            <p className="about-role">Premium Real Estate Consultancy · Est. 2014</p>

            <p className="about-text">
              With over 12 years of experience in India's real estate market, Luxe Estates
              has helped hundreds of families find their perfect homes. We specialize in
              luxury properties across major metropolitan cities, offering end-to-end
              support from property search to possession. Our commitment to transparency,
              integrity, and client satisfaction sets us apart.
            </p>

            <div className="about-achievements">
              <div className="achievement">
                <span className="check">✓</span> RERA Registered Agent
              </div>
              <div className="achievement">
                <span className="check">✓</span> 500+ Properties Sold
              </div>
              <div className="achievement">
                <span className="check">✓</span> 4.9★ Google Rating
              </div>
              <div className="achievement">
                <span className="check">✓</span> Free Legal Consultation
              </div>
              <div className="achievement">
                <span className="check">✓</span> Home Loan Assistance
              </div>
              <div className="achievement">
                <span className="check">✓</span> Post-Sale Support
              </div>
            </div>

            <div className="about-buttons">
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Luxe%20Estates"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                💬 Chat on WhatsApp
              </a>
              <a href="tel:+919999999999" className="btn btn-outline">
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgent;
