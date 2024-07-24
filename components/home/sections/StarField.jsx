'use client'
import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createStars = () => {
      const numStars = 100;
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.opacity = Math.random();
        container.appendChild(star);
      }
    };

    createStars();
  }, []);

  return (
    <div className="star-field" ref={containerRef}>
      {/* Stars will be generated dynamically */}
    </div>
  );
};

export default StarField;
