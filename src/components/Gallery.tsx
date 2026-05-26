import { useState } from 'react';
import { propertyGalleryImages } from '../data/images';
import './Gallery.css';

interface GalleryProps {
  images: string[];
  title: string;
  propertyId: string;
}

const Gallery = ({ images, title, propertyId }: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Use property-specific gallery images
  const galleryImages = propertyGalleryImages[propertyId] || [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <>
      <div className="gallery">
        {/* Main Image */}
        <div className="gallery-main" onClick={() => setLightboxOpen(true)}>
          <img src={galleryImages[activeIndex]} alt={`${title} - Image ${activeIndex + 1}`} />
          <span className="zoom-hint">🔍 Click to enlarge</span>
        </div>

        {/* Thumbnails */}
        <div className="gallery-thumbs">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`thumb-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={img} alt={`${title} - Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>✕</button>
          <button
            className="lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          >
            ‹
          </button>
          <img
            src={galleryImages[activeIndex]}
            alt={`${title} - Full size`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
