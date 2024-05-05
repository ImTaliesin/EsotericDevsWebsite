'use client'
import './style.scss';
import { useEffect, useRef } from 'react';

interface BlobBackgroundProps {
  className?: string;
}

const BlobBackground: React.FC<BlobBackgroundProps> = ({ className = '', ...props }) => {
  const interBubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;

      if (interBubbleRef.current) {
        interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }

      requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className={`interactive z-10 ${className}`} ref={interBubbleRef} {...props} />;
};

export default BlobBackground;