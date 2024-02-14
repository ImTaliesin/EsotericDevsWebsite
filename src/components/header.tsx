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
} from '@nextui-org/react';
import { useState } from 'react';
const headshotUrl = '/headshot.jpg';
export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuItems = ['About', 'Projects', 'Contact'];
	return (
		<Navbar
			shouldHideOnScroll isBordered
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className='flex'>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='sm:hidden'
			/>
			<NavbarBrand>
				<NavbarItem className='justify-start flex '>
					<Link href='#'>
						<Avatar src={headshotUrl} />
						<h3 className='p-3 align-middle justify-center'>Taliesin</h3>
					</Link>
				</NavbarItem>
			</NavbarBrand>
			<NavbarContent
				justify='end'
				className='hidden sm:flex gap-12'>
				<NavbarItem>About</NavbarItem>
				<NavbarItem>Projects</NavbarItem>
				<NavbarItem>Contact</NavbarItem>
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
