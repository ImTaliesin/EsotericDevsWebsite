'use client';
import React, { useState, useEffect } from 'react';
import SVGComponent from '../svg/SVGComponent';

const Background = () => {
	const [offsetY, setOffsetY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const parallaxSpeed = 0.25;
			setOffsetY(window.scrollY * parallaxSpeed);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='fixed top-0 left-0 w-full h-full z-0 overflow-hidden'>
			<div
				style={{
					transform: `translateY(${offsetY}px)`,
					position: 'fixed',
					top: '-30%',
					left: '-10%',
					width: '120%',
					height: '240%',
				}}>
				<SVGComponent className='w-full h-full object-cover' />
			</div>
		</div>
	);
};

export default Background;
