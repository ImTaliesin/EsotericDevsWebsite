'use client';
import React from 'react';
import CyclingWordsWords from '@/components/Small/cyclingWords';
import Reveal from '@/components/UI/Reveal';

const ProjectsButton: React.FC<{
	onClick: () => void;
}> = ({ onClick }) => (
	<button
		onClick={onClick}
		className="group hover:border-indigo-500 hover:underline hover:underline-offset-4 hover:decoration-2 hover:text-blue-400 relative bg-blue-500/60 hover:bg-blue-600/50 h-16 w-64 border-2 border-blue-600/80 text-center p-2 text-blue-200 text-2xl font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-48 before:bottom-12 before:z-10 before:bg-violet-600 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-24 after:h-20 after:content-[''] after:bg-indigo-700 after:right-4 after:top-12 after:rounded-full after:blur-lg before:transition-all before:duration-500 before:ease-in-out after:transition-all after:duration-500 after:ease-in-out hover:before:translate-x-[-2.2rem] hover:before:translate-y-[2.4rem] hover:after:translate-x-[4.5rem] hover:after:translate-y-[-2rem] hover:after:bg-indigo-700/80 underline underline-offset-2 transition-all duration-500 ease-in-out shadow-blue-600/80 shadow-lg">
		View My Projects
	</button>
);

const HeroSection: React.FC = () => {
	const handleClick = () => {
		const targetElement = document.getElementById('Projects');
		if (targetElement) {
			const offset = 52;
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div
			id='Home'
			className='z-10 relative flex justify-center items-center min-h-[80vh] lg:h-[95vh]'>
			<Reveal delay={0}>
				<div className='flex flex-col items-center justify-center m-auto space-y-4 max-w-xl px-4 pb-10'>
					<h2 className='text-8xl pb-1 font-extrabold text-center text-neutral-200'>
						Hey, I'm Brennan
					</h2>
					<p className='text-center text-2xl p-4 text-neutral-200'>
						I'm a <i>pragmatic</i> <b>Full-Stack Web Developer</b> building{' '}
						<b>Websites</b> and <b>Applications </b> that bring{' '}
						<b>
							{' '}
							<u>your ideas to life</u>{' '}
						</b>{' '}
						with a flair for <i>design</i> and <CyclingWordsWords />
					</p>
					<div className='mt-4'>
						<ProjectsButton onClick={handleClick} />
					</div>
				</div>
			</Reveal>
		</div>
	);
};

export default HeroSection;