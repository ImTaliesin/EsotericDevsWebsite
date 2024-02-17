import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MoonIcon from '../svg/moonSVG'; // Ensure this is the correct path to your Moon SVG component
import SunIcon from '../svg/sunSVG'; // Ensure this is the correct path to your Sun SVG component

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

  // Use SVG icons instead of text
  const ThemeIcon = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches) ? <SunIcon /> : <MoonIcon />;
  
  return (
    <button onClick={toggleTheme} className='relative flex justify-center items-center h-10 w-16 overflow-hidden border rounded-3xl border-violet-700 text-violet-700 shadow-2xl transition-all duration-200 hover:text-white hover:shadow-violet-700'>
      <span className='relative z-10'>
        {ThemeIcon}
      </span>
    </button>
  );
}
