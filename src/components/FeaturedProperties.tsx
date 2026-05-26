import { useMemo } from 'react';
import { properties } from '../data/properties';
import type { Filters } from '../pages/Home';
import PropertyCard from './PropertyCard';
import './FeaturedProperties.css';

interface FeaturedPropertiesProps {
  limit?: number;
  excludeId?: string;
  title?: string;
  subtitle?: string;
  filters?: Filters;
}

const FeaturedProperties = ({
  limit = 14,
  excludeId,
  title = 'Featured Properties',
  subtitle = 'Handpicked luxury residences in India\'s most sought-after locations',
  filters,
}: FeaturedPropertiesProps) => {

  const displayProperties = useMemo(() => {
    let filtered = properties.filter(p => p.id !== excludeId);

    if (filters) {
      // Filter by location (city)
      if (filters.location) {
        filtered = filtered.filter(p => p.city === filters.location);
      }

      // Filter by property type
      if (filters.type) {
        filtered = filtered.filter(p => p.type === filters.type);
      }

      // Filter by budget range
      if (filters.budget) {
        filtered = filtered.filter(p => {
          switch (filters.budget) {
            case '50l':
              return p.priceValue <= 5000000;
            case '1cr':
              return p.priceValue > 5000000 && p.priceValue <= 10000000;
            case '2cr':
              return p.priceValue > 10000000 && p.priceValue <= 20000000;
            case '3cr':
              return p.priceValue > 20000000;
            default:
              return true;
          }
        });
      }
    }

    return filtered.slice(0, limit);
  }, [excludeId, filters, limit]);

  const isFiltered = filters && (filters.location || filters.type || filters.budget);

  return (
    <section className="featured section" id="featured">
      <div className="container">
        <div className="section-header">
          <h2>{isFiltered ? 'Search Results' : title}</h2>
          <p>
            {isFiltered
              ? `Showing ${displayProperties.length} propert${displayProperties.length === 1 ? 'y' : 'ies'} matching your criteria`
              : subtitle}
          </p>
        </div>

        {displayProperties.length > 0 ? (
          <div className="property-grid">
            {displayProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p className="no-results-icon">🏠</p>
            <h3>No Properties Found</h3>
            <p>Try adjusting your filters to see more results.</p>
          </div>
        )}

        {!excludeId && (
          <div className="featured-cta">
            <button
              className="btn btn-outline"
              onClick={() => {
                const el = document.getElementById('featured');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View All Properties
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
