'use client';
import React from 'react';

import { Button } from '@nextui-org/react';
import CyclingWordsWords from '@/components/Small/cyclingWords';

const HeroSection = () => {
	return (
		<div
			id='Home'
			className='z-10 relative flex justify-center items-center lg:h-[80vh] h-[70vh]'>
			<div className='flex flex-col items-center justify-center m-auto space-y-4  max-w-xl px-4'>
				<h2 className='text-8xl pb-1 font-extrabold text-center text-neutral-200 '>
					Hey, I'm Brennan
				</h2>

				<p className='text-center text-2xl p-4 text-neutral-200'>
					I'm a <i>pragmatic</i> <b>Full-Stack Web Developer</b> building{' '}
					<b>Websites</b> and <b>Applications </b>
					that bring
					<b>
						{' '}
						<u>your ideas to life</u>{' '}
					</b>
					with a flair for <i>design</i> and <CyclingWordsWords />
				</p>
				<Button
					className='w-52 py-6 shadow-gray-600 shadow-lg bg-violet-700 text-white rounded text-2xl'
					onClick={() => {
						const targetElement = document.getElementById('Projects');
						if (targetElement) {
							targetElement.scrollIntoView({ behavior: 'smooth' });
						}
					}}>
					Projects
				</Button>
			</div>
		</div>
	);
};

export default HeroSection;
