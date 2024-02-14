import React from 'react';
import SVGComponent from './svgComponent';

interface SectionProps {
  children: React.ReactNode;
}

export default function BackgroundSection({ children }: SectionProps) {
  return (
    <div className='relative overflow-hidden'>
      <SVGComponent className='absolute w-full h-full inset-0 z-0' />
      {/* Gradient Overlay */}
      <div
        style={{
          background: 'linear-gradient(rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8))',
        }}
        className='absolute w-full h-full inset-0 z-10'
      />
      {/* Content */}
      <div className='relative z-20'>
        {children}
      </div>
    </div>
  );
}
