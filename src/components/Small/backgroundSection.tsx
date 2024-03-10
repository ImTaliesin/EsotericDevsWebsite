'use client';
import React, { useState, useEffect } from 'react';
import SVGComponent from '../svg/SVGComponent';

const Background = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const parallaxSpeed = 0.25;
      setOffsetY(window.scrollY * parallaxSpeed);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full h-full z-0 overflow-hidden">
      <div
        style={{
          transform: `translateY(${offsetY}px)`,
          position: 'fixed',
          top: '-50%',
          left: '0',
          width: '100%',
          height: '200%',
        }}
      >
        <SVGComponent className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Background;