import { usps } from '../data/properties';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Experience the Luxe Estates difference — where every detail is crafted for your peace of mind</p>
        </div>

        <div className="why-grid">
          {usps.map((usp, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon anim-float" style={{ animationDelay: `${index * 0.3}s` }}>
                {usp.icon}
              </div>
              <h4 className="why-title">{usp.title}</h4>
              <p className="why-text">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
