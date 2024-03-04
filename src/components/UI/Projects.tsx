import BlurSection from '../Small/blurSection';
import Image from 'next/image';
let BrewHausLaptop = import ('@public/BrewHausLaptop.jpg')

export default function Projects() {
	return (
		<BlurSection>
			<div id='Projects'className='flex m-14 flex-col justify-top items-center lg:h-[45vh] h-[55vh]'>
				<h1 className='font-sans text-4xl font-bold'>Projects</h1>
				<div className='relative mt-4 mb-2 h-1 w-12 bg-violet-600 rounded-full'></div>
				<p className='text-center max-w-2xl px-6'><Image alt='Laptop Image' src={"BrewHausLaptop"}></Image></p>
			</div>
		</BlurSection>
	);
}
