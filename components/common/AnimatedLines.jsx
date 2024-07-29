'use client';
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

const AnimatedText = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && ref.current) {
      // Force reflow to restart animation
      ref.current.style.animation = 'none';
      ref.current.offsetHeight; // Trigger reflow
      ref.current.style.animation = '';
    }
  }, [isInView]);

  const lines = children.split('\n');

  return (
    <div className="h-auto overflow-y-hidden w-full" ref={ref}>
      {lines.map((line, index) => (
        <div
          key={index}
          className={classNames(
            'transition-transform transform duration-500',
            {
              'animate-slideUp': isInView,
            },
            `delay-${index * 100}`
          )}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
