'use client';
import React from 'react';
import BlurSection from '@/components/Small/blurSection';
import { Chip, Button } from '@nextui-org/react';

const handleAnchorClick = (e: any, anchorId: string) => {
	e.preventDefault();
	const element = document.getElementById(anchorId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
};

const AboutMe = () => {
	return (
		<BlurSection>
			<div className='max-w-4xl mx-auto px-4 py-16'>
				<h1 className='font-sans text-4xl font-bold text-center mb-8'>
					About Me
				</h1>

				<div className='bg-neutral-900 rounded-lg p-6 mb-8 shadow-lg'>
					<p className='text-lg leading-relaxed'>
						Hi there! I'm a web developer who loves building cool stuff with
						code. I'm always eager to learn new technologies and improve my
						skills. Currently, I'm working on a competitive pvp matchmaking
						website and discord bot for Star Citizen.
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-8 mb-8'>
					<div className='bg-neutral-900 rounded-lg p-6 shadow-lg'>
						<h2 className='text-2xl font-semibold mb-4'>Experience</h2>
						<p className='text-lg leading-relaxed'>
							I've worked on all sorts of projects, from front-end interfaces to
							back-end systems. My experience spans across various technologies
							and frameworks, allowing me to build comprehensive web solutions.
							Check out my Projects section for examples of my work.
						</p>
					</div>
					<div className='bg-neutral-900 rounded-lg p-6 shadow-lg'>
						<h2 className='text-2xl font-semibold mb-4'>Aspirations</h2>
						<p className='text-lg leading-relaxed'>
							I'm always on the lookout for new opportunities to apply my
							skills, learn new things, and grow as a developer. If you have an
							exciting project that could benefit from my expertise, I'd love to
							hear about it!
						</p>
					</div>
				</div>

				<div className='bg-neutral-900 rounded-lg p-6 shadow-lg mb-8'>
					<h2 className='text-2xl font-semibold mb-4 text-center'>My Skills</h2>
					<div className='flex flex-wrap justify-center gap-3'>
						{[
							'HTML',
							'CSS',
							'JavaScript',
							'ReactJS',
							'NextJS',
							'NodeJS',
							'GIT',
							'SEO',
						].map((skill) => (
							<Chip
								key={skill}
								className='bg-violet-700 text-white text-lg px-4 py-2'>
								{skill}
							</Chip>
						))}
					</div>
				</div>

				<div className='text-center'>
					<Button
						onClick={(e) => handleAnchorClick(e, 'Contact')}
						className='px-8 py-4 bg-violet-700 text-white rounded-full text-xl shadow-lg hover:bg-violet-600 transition-colors'>
						Let's Connect
					</Button>
				</div>
			</div>
		</BlurSection>
	);
};

export default AboutMe;
