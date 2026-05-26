import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds scroll-reveal behavior to elements.
 * Observes all elements with .reveal, .reveal-left, .reveal-right, .reveal-scale
 * and adds .revealed class when they enter the viewport.
 */
const useScrollReveal = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
};

export default useScrollReveal;
