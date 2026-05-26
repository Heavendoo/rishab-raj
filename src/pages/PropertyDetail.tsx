import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { properties } from '../data/properties';
import Gallery from '../components/Gallery';
import EMICalculator from '../components/EMICalculator';
import InquiryForm from '../components/InquiryForm';
import FeaturedProperties from '../components/FeaturedProperties';
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="property-detail">
        <div className="container not-found">
          <h2>Property Not Found</h2>
          <p>The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  // Amenity icon mapping
  const amenityIcons: Record<string, string> = {
    'Swimming Pool': '🏊', 'Gym': '💪', 'Concierge': '🛎', 'Rooftop Garden': '🌿',
    'Smart Home': '🏠', 'EV Charging': '⚡', 'Private Elevator': '🛗', 'Wine Cellar': '🍷',
    'Private Garden': '🌳', 'Home Theatre': '🎬', 'Modular Kitchen': '🍳', 'Solar Panels': '☀️',
    'Rainwater Harvest': '💧', 'Security': '🔒', 'Clubhouse': '🏛', 'Jogging Track': '🏃',
    'Children Play Area': '🧒', 'Power Backup': '🔋', 'CCTV Security': '📹', 'Intercom': '📞',
    'Visitor Parking': '🅿️', 'Multipurpose Hall': '🏢', 'Compound Wall': '🧱', 'Water Connection': '🚰',
    'Electricity': '💡', 'Tar Road': '🛣', 'Street Lights': '💡', 'Drainage': '🔧',
    'Garden Area': '🌺', 'Security Gate': '🚧', 'Central AC': '❄️', 'High-Speed Elevator': '🛗',
    'Conference Room': '📋', 'Cafeteria': '☕', '24/7 Security': '👮', 'Fire Safety': '🧯',
    'Infinity Pool': '🏊', 'Home Automation': '📱', 'Rooftop Terrace': '🌅', 'Staff Quarters': '🏘',
  };

  return (
    <div className="property-detail">
      <div className="container">
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Properties
        </button>

        {/* Gallery */}
        <Gallery images={property.images} title={property.title} propertyId={property.id} />

        {/* Layout */}
        <div className="detail-layout">
          {/* Main Content */}
          <div className="detail-main">
            {/* Header */}
            <div className="prop-header">
              <div>
                {property.badge && (
                  <span className={`badge badge-${property.badge}`} style={{ marginBottom: '8px' }}>
                    {property.badge === 'premium' ? 'Premium' :
                     property.badge === 'new' ? 'New Launch' : 'Hot Deal'}
                  </span>
                )}
                <h1 className="prop-title">{property.title}</h1>
                <div className="prop-location">
                  <span>📍</span> {property.location}, {property.city}
                </div>
              </div>
              <div className="prop-price">{property.price}</div>
            </div>

            {/* Specs Bar */}
            <div className="specs-bar">
              {property.bedrooms > 0 && (
                <div className="spec-item">
                  <div className="spec-icon">🛏</div>
                  <div className="spec-value">{property.bedrooms} BHK</div>
                  <div className="spec-label">Bedrooms</div>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="spec-item">
                  <div className="spec-icon">🚿</div>
                  <div className="spec-value">{property.bathrooms}</div>
                  <div className="spec-label">Bathrooms</div>
                </div>
              )}
              <div className="spec-item">
                <div className="spec-icon">📐</div>
                <div className="spec-value">{property.area}</div>
                <div className="spec-label">Area</div>
              </div>
              <div className="spec-item">
                <div className="spec-icon">🧭</div>
                <div className="spec-value">{property.facing}</div>
                <div className="spec-label">Facing</div>
              </div>
              <div className="spec-item">
                <div className="spec-icon">🏢</div>
                <div className="spec-value">{property.floor}</div>
                <div className="spec-label">Floor</div>
              </div>
              <div className="spec-item">
                <div className="spec-icon">📅</div>
                <div className="spec-value">{property.age}</div>
                <div className="spec-label">Status</div>
              </div>
            </div>

            {/* Description */}
            <div className="prop-description">
              <h3>About This Property</h3>
              <p className="desc-text">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="amenities">
              <h3>Amenities & Features</h3>
              <div className="amenity-grid">
                {property.amenities.map((amenity, index) => (
                  <div className="amenity-item" key={index}>
                    <span className="amenity-icon">{amenityIcons[amenity] || '✓'}</span>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="prop-map">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.065!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${property.city}!5e0!3m2!1sen!2sin!4v1234567890`}
                title={`Map - ${property.location}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="detail-sidebar">
            <InquiryForm propertyTitle={property.title} />
            <EMICalculator defaultLoan={Math.round(property.priceValue * 0.8)} />
          </div>
        </div>

        {/* Similar Properties */}
        <FeaturedProperties
          limit={3}
          excludeId={property.id}
          title="Similar Properties"
          subtitle="You might also like these properties"
        />
      </div>
    </div>
  );
};

export default PropertyDetail;
