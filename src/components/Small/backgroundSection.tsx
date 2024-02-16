'use client';
import React, { useState, useEffect } from 'react';
import SVGComponent from './svgComponent';

const Background = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    // Calculate the offset based on the current scroll position and a parallax speed factor.
    // The window.pageYOffset provides the number of pixels the document is currently scrolled along the vertical axis.
    const parallaxSpeed = 0.25; // Adjust this value to control the speed of the parallax effect
    setOffsetY(window.pageYOffset * parallaxSpeed);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full z-0 overflow-hidden'>
      <div
        style={{
          transform: `translateY(${offsetY}px)`, // Apply the dynamic offset here
          position: 'absolute', // Changed from static to absolute to ensure it moves with the background
          top: '-30%', // Start with the SVG slightly off-screen
          left: '-10%',
          width: '120%', // Ensure the SVG is larger than the viewport
          height: '140%',
        }}
      >
        <SVGComponent className='w-full h-full object-cover' />
      </div>
      {/* Gradient Overlay remains unchanged */}
      <div
        style={{
          position: 'absolute', // Ensuring overlay is correctly positioned over the SVG
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(245, 245, 245, 0.55), rgba(245, 245, 245, 1))',
        }}
      ></div>
    </div>
  );
};

export default Background;
