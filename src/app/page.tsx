import BackgroundSection from '@/components/backgroundSection';
import Script from 'next/script';
import { Button, Chip } from '@nextui-org/react';
import CyclingWordsWords from '@/components/cyclingWords';
import EmptySection from '@/components/emptySection';
export default function Home() {
	return (
		<div>
			<BackgroundSection>
				<div className='flex justify-center items-center lg:h-[80vh] h-[60vh] '>
					<div className='flex flex-col items-center justify-center m-auto space-y-4 text-black'>
						<h1 className='text-center text-5xl font-extrabold px-3'>
							Hey, I'm Brennan Douglas
						</h1>
						<p className='p-4 max-w-lg text-center text-md'>
							Im a <b>Full-Stack Web Developer</b> building <b>Websites</b> and{' '}
							<b>Applications </b>
							that bring
							<b>
								{' '}
								<u>your ideas to life</u>{' '}
							</b>
							with a flair for <i>design</i> and <CyclingWordsWords />
						</p>
						<Button className='w-44 bg-violet-700 text-white py-2 rounded text-xl'>
							Projects
						</Button>
					</div>
				</div>
			</BackgroundSection>
			<EmptySection>
				{/* About Me Top Section */}
				<div className='flex flex-col justify-center items-center lg:min-h-[70vh] min-h-[40vh]'>
					<h1 className='flex text-2xl font-semibold'>About Me</h1>
					<div className='relative my-2 h-1 w-24 bg-violet-600 rounded-full'></div>
					<p className='text-md text-center max-w-2xl px-6'>
						Here you will find more information about me, what I do, and my
						current skills mostly in terms of programming and technology.
					</p>
				</div>
				{/* Below About Me Two Columns*/}
				{/* Left Column*/}
				<div className='grid grid-cols-2 gap-4 mb-10'>
					<div className='flex flex-col justify-center items-center space-y-2'>
						<div className='font-bold text-center'>Get to know me!</div>
						<div className='text-center'>
							<div className='text-center space-y-4'>
								<p>
									I'm a Frontend Web Developer building the Front-end of
									Websites and Web Applications that leads to the success of the
									overall product. Check out some of my work in the Projects
									section.
								</p>
								<p>
									I'm open to Job opportunities where I can contribute, learn
									and grow. If you have a good opportunity that matches my
									skills and experience then don't hesitate to contact me.
								</p>
								<Button className='items w-32 bg-violet-700 text-white py-2 rounded text-lg'>
									Projects
								</Button>
							</div>
						</div>
					</div>
					{/* Right Column*/}
					<div className='flex flex-col items-center justify-center space-y-2'>
						<div className='font-bold text-center'>My Skills</div>
						<div className='flex flex-wrap justify-center px-2 items-center gap-2'>
							<span className='px-4 py-2 bg-gray-200 text-black rounded-lg'>
								HTML
							</span>
							<span className='px-4 py-2 bg-gray-200 text-black rounded-lg'>
								CSS
							</span>
							<span className='px-4 py-2 bg-gray-200 text-black rounded-lg'>
								JavaScript
							</span>
							<span className='px-4 py-2 bg-gray-200 text-black rounded-lg'>
								ReactJS
							</span>
							<span className='px-4 py-2 bg-gray-200 text-black rounded-lg'>
								NextJS
							</span>
							<span className='px-4 py-2 bg-gray-200 text-black rounded-lg'>
								GIT
							</span>
							<span className='px-4 py-2 bg-gray-200 text-black rounded-lg'>
								Github
							</span>
							<span className='px-4 py-2 bg-gray-200 text-black rounded-lg'>
								SEO
							</span>
						</div>
					</div>
				</div>
				<div className='mb-52'></div>
			</EmptySection>
			<Script
				/* Tidio */
				src='//code.tidio.co/hadhdxoc2djou3bkex3rd6tvltarcwvp.js'
				strategy='beforeInteractive'
			/>
		</div>
	);
}
