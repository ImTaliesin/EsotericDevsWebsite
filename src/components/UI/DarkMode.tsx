'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState, CSSProperties } from 'react';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
   console.log('Toggling theme from:', theme, 'to:', theme === 'dark' ? 'light' : 'dark');
   setTheme(theme === 'dark' ? 'light' : 'dark');
 };
 

  // Explicitly typing the style object using CSSProperties
  const buttonStyle: CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    zIndex: 55,
  };

  return (
    <button onClick={toggleTheme} style={buttonStyle}>
      Toggle Theme
    </button>
  );
}
