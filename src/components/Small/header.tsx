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
	return (
		<Navbar
			shouldHideOnScroll
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
					<Link href='#'>
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
				<NavbarItem><Chip color='secondary' ><a href="#about" className='text-white px-1 text-medium '>About</a></Chip></NavbarItem>
				<NavbarItem><Chip color='secondary' ><a href="projects" className='text-white px-1 text-medium '>Projects</a></Chip></NavbarItem>
				<NavbarItem><Chip color='secondary' ><a href="contact" className='text-white px-1 text-medium '>Contact</a></Chip></NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={'foreground'}
							className='w-full'
							href='#'
							size='lg'>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
