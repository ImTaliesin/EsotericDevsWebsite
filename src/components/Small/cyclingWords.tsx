'use client'
import React, { useEffect, useState } from 'react';

const words = ['efficiency.',  'performance.', 'optimization.', 'responsiveness.', 'security.'];

const cyclingWords = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 300); 
    }, 1900); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'} text-2xl`}>
      {words[currentWordIndex]}
    </span>
  );
};

export default cyclingWords;
