'use client'
import React, { useEffect, useState } from 'react';

const words = ['speed.', 'performance.', 'optimization.', 'efficiency.', 'security.'];

const cyclingWords = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 500); 
    }, 2200); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'} text-xl`}>
      {words[currentWordIndex]}
    </span>
  );
};

export default cyclingWords;
