'use client';
import React, { useState, useEffect } from 'react';
import BlurSection from '@/components/Small/blurSection';
import { Chip } from '@nextui-org/react';
import Reveal from '@/components/UI/Reveal';

const handleAnchorClick = (
	e: React.MouseEvent<HTMLButtonElement>,
	anchorId: string
) => {
	e.preventDefault();
	const element = document.getElementById(anchorId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
};

interface ScrollingSkillsProps {
	skills: string[];
}

const ScrollingSkills = ({ skills }: ScrollingSkillsProps) => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const totalWidth = skills.length * 150; // Assuming each skill chip is about 150px wide
		const intervalId = setInterval(() => {
			setScrollPosition((prevPosition) => {
				//scroll
				const newPosition = prevPosition + 1;
				// If we've scrolled past all skills, reset to the beginning
				return newPosition >= totalWidth ? 0 : newPosition;
			});
		}, 40); // Adjust speed as needed
		// Clean up the interval on component unmount
		return () => clearInterval(intervalId);
	}, [skills]);

	return (
		<div
			className='relative overflow-hidden'
			style={{ height: '80px' }}>
			<div
				className='absolute top-0 left-0 w-96 h-16 bg-gradient-to-r from-indigo-900/40 to-transparent z-10'
				style={{ mixBlendMode: 'multiply' }}></div>
			<div
				className='absolute top-0 right-0 w-96 h-16 bg-gradient-to-l from-indigo-900/40 to-transparent z-10'
				style={{ mixBlendMode: 'multiply' }}></div>
			<div
				className='flex whitespace-nowrap py-4'
				style={{ transform: `translateX(-${scrollPosition}px)` }}>
				{[...skills, ...skills].map((skill, index) => (
					<Chip
						key={`${skill}-${index}`}
						className='bg-violet-700 text-white text-lg px-4 py-2 mx-2'>
						{skill}
					</Chip>
				))}
			</div>
		</div>
	);
};

const AboutMe: React.FC = () => {
	const skills = [
		'HTML',
		'CSS',
		'TailwindCSS',
		'JavaScript',
		'TypeScript',
		'ReactJS',
		'NextJS',
		'NodeJS',
		'Framer Motion',
		'GIT',
		'Docker',
	];

	return (
		<BlurSection>
			<div className='max-w-4xl mx-auto px-4 py-16 flex flex-col items-center'>
				<Reveal>
					<h1 className='font-sans text-4xl font-bold text-center mb-8'>
						About Me{' '}
						<div className='relative mt-6 mb-2 h-1 w-24 mx-auto bg-violet-600 rounded-full'></div>
					</h1>
				</Reveal>
				<div className='w-full space-y-8'>
					<Reveal delay={0.2}>
						<div className='bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100/30 p-6 mb-8 shadow-lg'>
							<p className='text-lg leading-relaxed'>
								Hey there! I'm a web developer with a passion for tinkering with
								code. When I'm not working on websites, or learning new
								technologies, I usually mod videogames and host private servers
								for communities to play on them. Currently, I'm working on an
								exciting project for a new animation studio, bringing their
								creative vision to life on the web.
							</p>
						</div>
					</Reveal>

					<div className='grid md:grid-cols-2 gap-8 mb-8'>
						<Reveal delay={0.4}>
							<div className='bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100/30 p-6 shadow-lg'>
								<h2 className='text-2xl font-semibold mb-4'>Experience</h2>
								<p className='text-lg leading-relaxed'>
									My experience spans a wide range of web development areas,
									from creating user-friendly front-end interfaces to developing
									intricate back-end systems. If you're interested in seeing
									examples of my work, please check out my Projects section.
								</p>
							</div>
						</Reveal>
						<Reveal delay={0.6}>
							<div className='bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100/30 p-6 shadow-lg'>
								<h2 className='text-2xl font-semibold mb-4'>Aspirations</h2>
								<p className='text-lg leading-relaxed'>
									I'm always eager to take on new challenges that will expand my
									skill set. Whether it's learning a new programming language or
									solving complex problems, I enjoy pushing my boundaries. If
									you have an exciting project in mind that could benefit from
									my expertise, don't hesitate to reach out!
								</p>
							</div>
						</Reveal>
					</div>

					<Reveal
						delay={0.8}
						width='100%'>
						<div className='bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100/30 py-6 shadow-lg mb-2'>
							<h2 className='text-2xl font-semibold mb-4 text-center'>
								My Digital Toolbox
							</h2>
							<ScrollingSkills skills={skills} />
						</div>
					</Reveal>
				</div>
			</div>
		</BlurSection>
	);
};

export default AboutMe;
