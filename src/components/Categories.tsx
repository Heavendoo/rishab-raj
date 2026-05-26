import { categories } from '../data/properties';
import './Categories.css';

// Unsplash images for each category
const categoryImages: Record<string, string> = {
  Apartment: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
  Villa: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
  Plot: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
  Commercial: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
};

const Categories = () => {
  return (
    <section className="categories section" id="categories">
      <div className="container">
        <div className="section-header">
          <h2>Explore by Category</h2>
          <p>Find properties that match your lifestyle and investment goals</p>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <img
                src={categoryImages[category.type]}
                alt={category.title}
                loading="lazy"
              />
              <div className="category-overlay">
                <h3 className="category-title">{category.title}</h3>
                <span className="category-count">{category.count}+ Properties</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
