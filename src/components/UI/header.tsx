'use client';
import {
	Navbar,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Avatar,
	NavbarMenuItem,
	Button,
} from '@nextui-org/react';

import { useState } from 'react';

const headshotUrl = '/headshot.jpg';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuItems = ['About', 'Projects', 'Contact', 'Home'];

	const handleAnchorClick = (e: any, anchorId: string) => {
		e.preventDefault();
		// Close the menu
		setIsMenuOpen(false);
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
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className='flex py-3 justify-items-center bg-black/90'>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='sm:hidden text-white'
			/>
			<NavbarBrand>
				<NavbarItem className='justify-start flex '>
					<a
						style={{ cursor: 'pointer' }}
						className='align-middle flex justify-center'
						onClick={(e) => handleAnchorClick(e, 'Home')}>
						<Avatar src={headshotUrl} />
						<h2 className='p-2 align-middle flex justify-center text-mytext dark:text-white text-large'>
							Brennan D.
						</h2>
					</a>
				</NavbarItem>
			</NavbarBrand>
			<NavbarContent
				justify='end'
				className='hidden sm:flex gap-10'>
				{/* Modified NavbarItems to use onClick for custom scroll behavior */}
				<NavbarItem>
					<Button className="relative h-10 w-32 overflow-hidden rounded-3xl border border-violet-700 bg-transparent text-violet-700 shadow-md transition-all duration-300 hover:text-white hover:shadow-violet-700 hover:bg-violet-700">
						<a
							href='#about'
							className='relative z-10'
							onClick={(e) => handleAnchorClick(e, 'about')}>
							About
						</a>
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Button className="relative h-10 w-32 overflow-hidden rounded-3xl border border-violet-700 bg-transparent text-violet-700 shadow-md transition-all duration-300 hover:text-white hover:shadow-violet-700 hover:bg-violet-700">
						<a
							href='#Projects'
							className='relative z-10'
							onClick={(e) => handleAnchorClick(e, 'about')}>
							Projects
						</a>
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Button className="relative h-10 w-32 overflow-hidden rounded-3xl border border-violet-700 bg-transparent text-violet-700 shadow-md transition-all duration-300 hover:text-white hover:shadow-violet-700 hover:bg-violet-700">
						<a
							href='#Contact'
							className='relative z-10'
							onClick={(e) => handleAnchorClick(e, 'about')}>
							Contact
						</a>
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem
						key={`${item}-${index}`}
						className='mt-6'>
						<a
							href={`#${item.toLowerCase()}`}
							onClick={(e) => handleAnchorClick(e, item.toLowerCase())}
							className=' w-full text-black '
							style={{ cursor: 'pointer' }}>
							{item}
						</a>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
