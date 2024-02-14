import React from 'react';
import BackgroundSection from '@/components/Small/backgroundSection';
import { Button } from '@nextui-org/react';
import CyclingWordsWords from '@/components/Small/cyclingWords';

const HeroSection = () => {
	return (
		<BackgroundSection>
			<div className='flex justify-center items-center lg:h-[80vh] h-[55vh]'>
				<div className='flex flex-col items-center justify-center m-auto space-y-4 text-black max-w-xl px-4'>
					<h1 className='text-6xl font-extrabold text-center'>
						Hey, I'm Brennan
					</h1>
					<p className='text-center text-2xl p-4'>
						I'm a <b>Full-Stack Web Developer</b> building <b>Websites</b> and{' '}
						<b>Applications </b>
						that bring
						<b>
							{' '}
							<u>your ideas to life</u>{' '}
						</b>
						with a flair for <i>design</i> and <CyclingWordsWords />
					</p>
					<Button className='w-52 py-6 bg-violet-700 text-white rounded text-2xl'>
						Projects
					</Button>
				</div>
			</div>
		</BackgroundSection>
	);
};

export default HeroSection;
