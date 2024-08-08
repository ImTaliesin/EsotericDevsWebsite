'use client'
import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
  Button,
} from '@nextui-org/react';
import { useTheme } from 'next-themes';

const headshotUrl = '/headshot.jpg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const menuItems = ['About', 'Projects', 'Contact'];

  useEffect(() => {
    setTheme('light');
  }, [theme, setTheme]);

  const handleAnchorClick = (e: React.MouseEvent, anchorId: string) => {
    e.preventDefault();
    const element = document.getElementById(anchorId);
    if (element) {
      const headerHeight = 36;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='flex py-3 justify-items-center bg-neutral-950/50'
    >
      <NavbarBrand>
        <NavbarItem className='justify-start flex'>
          <a
            style={{ cursor: 'pointer' }}
            className='align-middle flex justify-center'
            onClick={(e) => handleAnchorClick(e, 'Home')}
          >
            <Avatar src={headshotUrl} />
            <h2 className='p-2 align-middle flex justify-center text-mytext text-large'>
              Brennan D.
            </h2>
          </a>
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent
        justify='end'
        className='hidden sm:flex gap-10'
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Button
              className="group hover:border-indigo-500 hover:text-blue-400 relative bg-indigo-500/60 hover:bg-indigo-600/50 h-10 w-32 border-2 border-indigo-600/80 text-center p-2 text-blue-200 text-lg font-bold rounded-lg overflow-hidden transition-all duration-500 ease-in-out shadow-indigo-600/80 shadow-lg"
              onClick={(e) => handleAnchorClick(e, item)}
            >
              {item}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}