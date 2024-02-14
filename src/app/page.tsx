import Section from '@/components/section';
import Script from 'next/script';
import { Button } from '@nextui-org/react';
import CyclingWordsWords from '@/components/cyclingWords';
export default function Home() {
	return (
		<div>
			<Section>
				<div className='flex justify-center items-center min-h-[1000px]'>
					<div className='flex flex-col items-center justify-center m-auto space-y-4 text-black'>
						<h1 className='text-5xl font-semibold'>Hey, I'm Brennan Douglas</h1>
						<p className='py-4 max-w-lg text-center text-md'>
							A <b>Full-Stack Web Developer</b> building <b>Websites</b> and{' '}
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
			</Section>

			<Script
				/* Tidio */
				src='//code.tidio.co/hadhdxoc2djou3bkex3rd6tvltarcwvp.js'
				strategy='beforeInteractive'
			/>
		</div>
	);
}
