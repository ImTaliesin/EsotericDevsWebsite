'use client';
import {
	Navbar,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Avatar,
	Link,
	NavbarMenuItem,
	Chip,
 } from '@nextui-org/react';
 import { useState } from 'react';
 
 const headshotUrl = '/headshot.jpg';
 
 export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuItems = ['About', 'Projects', 'Contact'];
 
	const handleAnchorClick = (e:any, anchorId:string) => {
	  e.preventDefault();
	  const element = document.getElementById(anchorId);
	  if (element) {
		 window.scrollTo({
			top: element.offsetTop - 150, // Adjust the offset value as needed
			behavior: 'smooth',
		 });
	  }
	};
 
	return (
	  <Navbar
		 isBordered
		 isMenuOpen={isMenuOpen}
		 onMenuOpenChange={setIsMenuOpen}
		 className='flex py-3 justify-items-center'>
		 <NavbarMenuToggle
			aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
			className='sm:hidden'
		 />
		 <NavbarBrand>
			<NavbarItem className='justify-start flex '>
			  <Link href='/'>
				 <Avatar src={headshotUrl} />
				 <div className='p-3 align-middle justify-center text-large'>
					Brennan D.
				 </div>
			  </Link>
			</NavbarItem>
		 </NavbarBrand>
		 <NavbarContent
			justify='end'
			className='hidden sm:flex gap-10'>
			{/* Modified NavbarItems to use onClick for custom scroll behavior */}
			<NavbarItem>
			  <a href="#about" onClick={(e) => handleAnchorClick(e, 'about')} className='text-white px-5 py-2 rounded-3xl bg-violet-700 text-medium '>About</a>
			</NavbarItem>
			<NavbarItem>
			  <a href="#projects" onClick={(e) => handleAnchorClick(e, 'projects')} className='text-white px-5 py-2 rounded-3xl bg-violet-700 text-medium '>Projects</a>
			</NavbarItem>
			<NavbarItem>
			  <a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className='text-white px-5 py-2 rounded-3xl bg-violet-700 text-medium '>Contact</a>
			</NavbarItem>
		 </NavbarContent>
 
		 <NavbarMenu>
			{menuItems.map((item, index) => (
			  <NavbarMenuItem key={`${item}-${index}`}>
				 {/* Assuming the menu items are supposed to link to sections on the page, similar handling as above */}
				 <a
					href={`#${item.toLowerCase()}`}
					onClick={(e) => handleAnchorClick(e, item.toLowerCase())}
					className='w-full text-white'
					style={{ cursor: 'pointer' }}>
					{item}
				 </a>
			  </NavbarMenuItem>
			))}
		 </NavbarMenu>
	  </Navbar>
	);
 }
 