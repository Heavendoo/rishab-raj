import './CTABanner.css';

const CTABanner = () => {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Find Your <span className="text-gold">Perfect Home?</span>
          </h2>
          <p className="cta-subtitle">
            Get expert guidance from consultation to possession. Our team is here
            to make your dream home a reality.
          </p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20find%20my%20dream%20home"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary anim-pulse-glow"
            >
              💬 Chat With Us
            </a>
            <a href="tel:+919999999999" className="btn btn-outline">
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
