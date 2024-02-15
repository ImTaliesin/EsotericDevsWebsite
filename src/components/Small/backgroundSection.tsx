'use client';
import React, { useState, useEffect } from 'react';
import SVGComponent from './svgComponent';

interface SectionProps {
	children: React.ReactNode;
}

export default function BackgroundSection({ children }: SectionProps) {
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='relative overflow-hidden'>
			<SVGComponent
				className='absolute w-full h-full inset-0 z-0'
				style={{ transform: `translateY(${offsetY * .8 }px)` }} // Adjust the rate here
			/>
			{/* Gradient Overlay */}
			<div
				style={{
					background:
						'linear-gradient(rgba(245, 245, 245, 0.4), rgba(245, 245, 245, 0.9))',
				}}
				className='absolute w-full h-full inset-0 z-10'
			/>
			{/* Content */}
			<div className='relative z-20'>{children}</div>
		</div>
	);
}
