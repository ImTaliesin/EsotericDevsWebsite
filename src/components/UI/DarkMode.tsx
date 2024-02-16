'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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

  // Determine button text based on the current theme
  const buttonText = theme === 'dark' ? 'Light' : 'Dark';
  
  return (
    <button onClick={toggleTheme} className='relative h-10 w-16 overflow-hidden border rounded-3xl border-violet-700 text-violet-700 shadow-2xl transition-all duration-200 before:absolute before:inset-0 before:m-auto before:scale-0 before:rounded-full before:bg-violet-700 before:transition-transform before:duration-300 before:ease-out hover:text-white hover:shadow-violet-700 hover:before:scale-110'>
      <a className='relative z-10'>{buttonText}</a>
    </button>
  );
}
