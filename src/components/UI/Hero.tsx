import React from 'react';

import { Button } from '@nextui-org/react';
import CyclingWordsWords from '@/components/Small/cyclingWords';

const HeroSection = () => {
	return (
		<div
			id='Home'
			className='z-55 relative flex justify-center items-center lg:h-[80vh] h-[70vh]'>
			<div className='flex flex-col items-center justify-center m-auto space-y-4 text-black max-w-xl px-4'>
				<h2 className='text-6xl pb-1 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-br from-violet-800 to-indigo-400 dark:bg-gradient-to-t dark:to-neutral-900 dark:from-violet-800'>
					Hey, I'm Brennan
				</h2>

				<p className='text-center text-2xl p-4 dark:text-black'>
					I'm a <b>Full-Stack Web Developer</b> building <b>Websites</b> and{' '}
					<b>Applications </b>
					that bring
					<b>
						{' '}
						<u>your ideas to life</u>{' '}
					</b>
					with a flair for <i>design</i> and <CyclingWordsWords />
				</p>
				<Button className='w-52 py-6 shadow-gray-600 shadow-lg bg-violet-700 text-white rounded text-2xl'>
					Projects
				</Button>
			</div>
		</div>
	);
};

export default HeroSection;
