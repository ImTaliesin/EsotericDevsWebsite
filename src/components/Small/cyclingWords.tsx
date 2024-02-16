'use client'
import React, { useEffect } from 'react';

const words = ['efficiency.',  'performance.', 'optimization.', 'responsiveness.', 'security.'];

// This component initializes with the first word server-side but relies on client-side JS for cycling
const CyclingWords = () => {
  // Render the initial word server-side
  let initialWord = words[0];

  useEffect(() => {
    let currentWordIndex = 0;
    const cycleWords = () => {
      const span = document.getElementById('cyclingWord');
      if (!span) return;

      // Immediately set opacity to 0 to fade out the current word
      span.style.opacity = '0';

      setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        span.textContent = words[currentWordIndex];

        // Fade in the new word after a short delay
        span.style.opacity = '1';
      }, 300); // Match timeout to CSS transition for smooth fade effect
    };

    const intervalId = setInterval(cycleWords, 1900);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span
      id="cyclingWord"
      className="transition-opacity duration-300 opacity-100 text-2xl"
    >
      {initialWord}
    </span>
  );
};

export default CyclingWords;
