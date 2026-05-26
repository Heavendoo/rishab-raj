import { useState } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyChooseUs from '../components/WhyChooseUs';
import Categories from '../components/Categories';
import AboutAgent from '../components/AboutAgent';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

export interface Filters {
  location: string;
  type: string;
  budget: string;
}

const Home = () => {
  const [filters, setFilters] = useState<Filters>({
    location: '',
    type: '',
    budget: '',
  });

  const handleSearch = (newFilters: Filters) => {
    setFilters(newFilters);
    const el = document.getElementById('featured');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero onSearch={handleSearch} />
      <Stats />
      <FeaturedProperties filters={filters} />
      <WhyChooseUs />
      <Categories />
      <AboutAgent />
      <Testimonials />
      <CTABanner />
    </>
  );
};

export default Home;
