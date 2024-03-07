import React from 'react';
import BlurSection from '@/components/Small/blurSection';
import { Chip, Button } from '@nextui-org/react';

const AboutMe = () => {
	return (
		<BlurSection>
			{/* About Me Top Section */}
			<div className='flex flex-col justify-center items-center px-4 mt-16 mb-8 rounded-5xl'>
				<h1 className='font-sans text-4xl font-bold'>About Me</h1>
				<div className='relative my-2 h-1 w-12 bg-violet-600 rounded-full'></div>
				<p className='text-center max-w-lg text-lg px-6'>
					Hi there! I'm a web developer who loves building cool stuff with code.
					I'm always eager to learn new technologies and improve my skills. I'm
					currently working on competitive pvp matchmaking website and discord
					bot for Star Citizen.
				</p>
			</div>
			{/* Below About Me Two Columns*/}
			<div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 mb-6 px-4'>
				{/* Purple Line */}
				<div className='flex justify-center col-span-full'>
					<div className='h-1 w-48 bg-violet-600 rounded-full'></div>
				</div>

				{/* Left Column */}
				<div className='flex flex-col items-center justify-center mx-4'>
					<div className='text-center space-y-4 max-w-xl text-xl md:pt-5'>
						<p>
							I've worked on all sorts of projects, from the front-end stuff you
							see to the back-end code that makes it all work behind the scenes.
							You can check out some examples of what I've done in the Projects
							section.
						</p>
						<p>
							I'm always on the lookout for new opportunities to put my skills
							to work, learn new things, and grow as a developer. So if you've
							got a cool project that you think I'd be a good fit for, feel free
							to reach out and let's chat.
						</p>
						<Button className='w-52 py-6 shadow-gray-600 shadow-lg bg-violet-700 text-white rounded text-2xl'>
							Contact
						</Button>
					</div>
				</div>

				{/* Right Column */}
				<div className='flex flex-col items-center justify-self-center justify-top mt-4 space-y-4 mb-4 max-w-md'>
					<div className='font-bold text-center text-3xl pt-6 lg:pt-0'>
						My Skills
					</div>
					<div className='flex flex-wrap justify-center items-center gap-2 max-w-sm'>
						<Chip className='bg-neutral-800 text-white rounded-lg text-xl px-2 py-4'>
							HTML
						</Chip>
						<Chip className='bg-neutral-800 text-white rounded-lg text-xl px-2 py-4'>
							CSS
						</Chip>
						<Chip className='bg-neutral-800 text-white rounded-lg text-xl px-2 py-4'>
							JavaScript
						</Chip>
						<Chip className='bg-neutral-800 text-white rounded-lg text-xl px-2 py-4'>
							ReactJS
						</Chip>
						<Chip className='bg-neutral-800 text-white rounded-lg text-xl px-2 py-4'>
							NextJS
						</Chip>
						<Chip className='bg-neutral-800 text-white rounded-lg text-xl px-2 py-4'>
							GIT
						</Chip>
						<Chip className='bg-neutral-800 text-white rounded-lg text-xl px-2 py-4'>
							Github
						</Chip>
						<Chip className='bg-neutral-800 text-white rounded-lg text-xl px-2 py-4'>
							SEO
						</Chip>
					</div>
				</div>
			</div>
			<div className='lg:mb-28'></div>
		</BlurSection>
	);
};

export default AboutMe;
