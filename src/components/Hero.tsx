import { useState } from 'react';
import type { Filters } from '../pages/Home';
import './Hero.css';

interface HeroProps {
  onSearch: (filters: Filters) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const [searchType, setSearchType] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchBudget, setSearchBudget] = useState('');

  const handleSearch = () => {
    onSearch({
      location: searchLocation,
      type: searchType,
      budget: searchBudget,
    });
  };

  return (
    <section className="hero" id="hero">
      {/* Background */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')`,
        }}
      />
      <div className="hero-overlay" />

      {/* Decorative Elements */}
      <div className="hero-decoration top-right" />
      <div className="hero-decoration bottom-left" />

      {/* Content */}
      <div className="hero-content">
        <p className="hero-tagline">✦ Premium Real Estate</p>
        <h1 className="hero-title">
          Find Your <span className="highlight">Dream Home</span>
        </h1>
        <p className="hero-subtitle">
          Discover handpicked luxury properties across India's most prestigious
          locations. Your perfect home is just a click away.
        </p>

        {/* Search Bar */}
        <div className="search-bar">
          <div className="search-field">
            <label htmlFor="search-location">Location</label>
            <select
              id="search-location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            >
              <option value="">All Cities</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Pune">Pune</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Ahmedabad">Ahmedabad</option>
            </select>
          </div>

          <div className="search-field">
            <label htmlFor="search-type">Property Type</label>
            <select
              id="search-type"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Plot">Plot</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          <div className="search-field">
            <label htmlFor="search-budget">Budget</label>
            <select
              id="search-budget"
              value={searchBudget}
              onChange={(e) => setSearchBudget(e.target.value)}
            >
              <option value="">Any Budget</option>
              <option value="50l">Up to ₹50 Lakhs</option>
              <option value="1cr">₹50L – ₹1 Cr</option>
              <option value="2cr">₹1 Cr – ₹2 Cr</option>
              <option value="3cr">₹2 Cr+</option>
            </select>
          </div>

          <button className="btn btn-primary search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
