import React from 'react';
import BlurSection from '@/components/Small/blurSection';
import { Chip } from '@nextui-org/react';

const AboutMe = () => {
	return (
		<BlurSection>
			{/* About Me Top Section */}
			<div
				id='about'
				className='flex flex-col justify-center items-center px-4 py-16 rounded-5xl'>
				<h1 className='font-sans text-4xl font-bold'>ABOUT ME</h1>
				<div className='relative my-2 h-1 w-12 bg-violet-600 rounded-full'></div>
				<p className='text-center max-w-2xl px-6'>
					Here you will find more information about me, what I do, and my
					current skills mostly in terms of programming and technology.
				</p>
			</div>
			{/* Below About Me Two Columns*/}
			<div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 mb-10 px-4'>
				{/* Left Column*/}
				<div className='flex flex-col justify-center items-center space-y-4'>
					<h1 className='font-bold text-center justify-top text-3xl '>
						Get to know me!
					</h1>
					<div className='text-center space-y-4 max-w-xl text-xl mx-4'>
						<p>
							I'm a Full Stack Web Developer building Websites and Web
							Applications that leads to the success of your product and
							business. Check out some of my work in the Projects section.
						</p>
						<p>
							I'm open to Job opportunities where I can contribute, learn and
							grow. If you have a good opportunity that matches my skills then
							don't hesitate to contact me.
						</p>
					</div>
				</div>
				{/* Right Column*/}
				<div className='flex flex-col items-center justify-self-center justify-top space-y-4 max-w-md mb-24'>
					<div className='font-bold text-center text-3xl pt-6 lg:pt-0'>
						My Skills
					</div>
					<div className='flex flex-wrap justify-center items-center gap-2 max-w-sm '>
						<Chip className='bg-gray-200 text-black rounded-lg text-xl px-2 py-4'>
							HTML
						</Chip>
						<Chip className='bg-gray-200 text-black rounded-lg text-xl px-2 py-4'>
							CSS
						</Chip>
						<Chip className='bg-gray-200 text-black rounded-lg text-xl px-2 py-4'>
							JavaScript
						</Chip>
						<Chip className='bg-gray-200 text-black rounded-lg text-xl px-2 py-4'>
							ReactJS
						</Chip>
						<Chip className='bg-gray-200 text-black rounded-lg text-xl px-2 py-4'>
							NextJS
						</Chip>
						<Chip className='bg-gray-200 text-black rounded-lg text-xl px-2 py-4'>
							GIT
						</Chip>
						<Chip className='bg-gray-200 text-black rounded-lg text-xl px-2 py-4'>
							Github
						</Chip>
						<Chip className='bg-gray-200 text-black rounded-lg text-xl px-2 py-4'>
							SEO
						</Chip>
					</div>
				</div>
			</div>
			<div className='lg:mb-24'></div>
		</BlurSection>
	);
};

export default AboutMe;
