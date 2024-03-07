'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MoonIcon from '../svg/moonSVG'; // Adjust paths as necessary
import SunIcon from '../svg/sunSVG'; // Adjust paths as necessary

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    // Optimized theme icon determination
    const isDarkMode = theme === 'light' || (!theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);
    const ThemeIcon = isDarkMode ? <SunIcon /> : <MoonIcon />;
//currently hidden and borken, dark mode is not working
    return (
        <button onClick={toggleTheme} className="z-50 fixed lg:bottom-32 lg:right-7 bottom-28 right-2.5 hidden justify-center items-center h-10 w-16 overflow-hidden transition-all duration-200 hover:text-white hover:shadow-violet-700">
            {ThemeIcon}
        </button>
    );
}
