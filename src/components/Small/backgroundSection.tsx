'use client';
import React, { useState, useLayoutEffect } from 'react';
import SVGComponent from './svgComponent';

const Background = () => {
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => {
		requestAnimationFrame(() => {
			const parallaxSpeed = 0.6; // Adjust this value to control the parallax speed
			setOffsetY(parallaxSpeed);
		});
	};

	useLayoutEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='fixed top-0 left-0 w-full h-full z-0 overflow-hidden'>
			{/* Adjust the transform based on scroll to achieve the parallax effect */}
			<div
				style={{
					position: 'absolute',
					top: '-10%', // Start with the SVG slightly off-screen
					left: '-10%',
					width: '120%', // Ensure the SVG is larger than the viewport
					height: '120%',
					transform: `translateY(${offsetY}px)`,
				}}>
				<SVGComponent className='w-full h-full object-cover' />
			</div>
			{/* Gradient Overlay remains unchanged */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					background:
						'linear-gradient(rgba(245, 245, 245, 0.4), rgba(245, 245, 245, 0.8))',
				}}></div>
		</div>
	);
};

export default Background;
