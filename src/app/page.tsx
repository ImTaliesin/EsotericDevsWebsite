import BackgroundSection from '@/components/backgroundSection';
import Script from 'next/script';
import { Button } from '@nextui-org/react';
import CyclingWordsWords from '@/components/cyclingWords';
import Section from '@/components/emptySection';
export default function Home() {
	return (
		<div>
			<BackgroundSection>
				<div className='flex justify-center items-center min-h-[80vh]'>
					<div className='flex flex-col items-center justify-center m-auto space-y-4 text-black'>
						<h1 className='text-center text-5xl font-extrabold'>Hey, I'm Brennan</h1>
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
			<Section>
				{/* About Me Top Section */}
				<div className='flex flex-col justify-center items-center min-h-[1000px] space-y-4'>
					<h1 className='text-2xl font-semibold'>About Me</h1>
					<div className='relative my-2 h-1 w-24 bg-violet-600 rounded-full'></div>
					<p className='text-md text-center max-w-lg'>
						Here you will find more information about me, what I do, and my
						current skills mostly in terms of programming and technology.
					</p>
				</div>
				{/* Below about Me - Left*/}

				{/* Below about Me - Right*/}

			</Section>
			<Script
				/* Tidio */
				src='//code.tidio.co/hadhdxoc2djou3bkex3rd6tvltarcwvp.js'
				strategy='beforeInteractive'
			/>
		</div>
	);
}
