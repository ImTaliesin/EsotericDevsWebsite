'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import SVGComponent from '../svg/SVGComponent';
import DarkSVGComponent from '../svg/DarkSVGComponent';

const Background = () => {
  const [offsetY, setOffsetY] = useState(0);
  const { theme, systemTheme, resolvedTheme } = useTheme(); // Use resolvedTheme or systemTheme if you're using auto theme
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const parallaxSpeed = 0.25;
    setOffsetY(window.pageYOffset * parallaxSpeed);
  };

  // Determine if dark mode is active
  const isDarkMode = mounted && (theme === 'dark' || (!theme && systemTheme === 'dark') || resolvedTheme === 'dark');

  return (
    <div className='fixed top-0 left-0 w-full h-full z-0 overflow-hidden'>
      <div
        style={{
          transform: `translateY(${offsetY}px)`,
          position: 'absolute',
          top: '-30%',
          left: '-10%',
          width: '120%',
          height: '140%',
        }}
      >
        {/* Ensure we don't attempt to render theme-specific content until after mounting */}
        {mounted && (
          isDarkMode ? (
            <DarkSVGComponent className='w-full h-full object-cover' />
          ) : (
            <SVGComponent className='w-full h-full object-cover' />
          )
        )}
      </div>
      <div
        style={{
          position: 'absolute',
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
