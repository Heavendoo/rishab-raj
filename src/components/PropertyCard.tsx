import { Link } from 'react-router-dom';
import type { Property } from '../data/properties';
import { propertyCardImages, fallbackImage } from '../data/images';
import './PropertyCard.css';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const badgeClass = property.badge
    ? `badge badge-${property.badge}`
    : '';

  const badgeLabel =
    property.badge === 'premium' ? 'Premium' :
    property.badge === 'new' ? 'New Launch' :
    property.badge === 'hot' ? 'Hot Deal' : '';

  return (
    <Link to={`/property/${property.id}`} className="property-card">
      {/* Image */}
      <div className="card-image">
        <img
          src={propertyCardImages[property.id] || fallbackImage}
          alt={property.title}
          loading="lazy"
        />
        {property.badge && (
          <div className={`card-badge ${badgeClass}`}>{badgeLabel}</div>
        )}
        <div className="card-price-tag">{property.price}</div>
      </div>

      {/* Info */}
      <div className="card-info">
        <h3 className="card-title">{property.title}</h3>
        <div className="card-location">
          <span className="pin-icon">📍</span>
          {property.location}, {property.city}
        </div>

        {/* Specs */}
        <div className="card-specs">
          {property.bedrooms > 0 && (
            <div className="spec">
              <span className="spec-icon">🛏</span>
              {property.bedrooms} BHK
            </div>
          )}
          <div className="spec">
            <span className="spec-icon">📐</span>
            {property.area}
          </div>
          {property.parking && (
            <div className="spec">
              <span className="spec-icon">🚗</span>
              Parking
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer">
        <span className="card-type">{property.type}</span>
        <span className="card-link">
          View Details →
        </span>
      </div>
    </Link>
  );
};

export default PropertyCard;
