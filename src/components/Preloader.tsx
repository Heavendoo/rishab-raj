import { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`}>
      <div className="preloader-logo">◆ Luxe Estates</div>
      <div className="preloader-spinner" />
    </div>
  );
};

export default Preloader;
