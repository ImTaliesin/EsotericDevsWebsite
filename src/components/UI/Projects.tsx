import Link from 'next/link';
import BlurSection from '../Small/blurSection';
import Image from 'next/image';

export default function Projects() {
	return (
		<BlurSection>
			<div
				id='Projects'
				className='flex m-14 flex-col justify-top items-center'>
				<h1 className='font-sans text-4xl font-bold'>Projects</h1>
				<div className='relative mt-4 mb-2 h-1 w-12 bg-violet-600 rounded-full'></div>
				{/* Brew Haus */}
				<div className='flex flex-col md:flex-row items-center'>
					<Link href='https://talie-restaurant-template.vercel.app/'>
						<Image
							alt='Laptop Image'
							src='/BrewHausLaptop.png'
							width={500}
							height={300}
							className='flex-1'
						/>
					</Link>
					<div className='md:ml-2 max-w-md mt-6 md:mt-0'>
						<p className='text-xl text-justify'>
							Brew Haus is a modern restaurant template built using Next.js and
							Tailwind CSS that I designed and developed. This website showcases
							a responsive layout that adapts seamlessly to different screen
							sizes, ensuring an optimal viewing experience across all desktop
							and mobile screens.
						</p>
					</div>
				</div>
				{/* Store Citizen */}
				<div className='flex flex-col md:flex-row items-center mt-8'>
					<Link href='https://talie-restaurant-template.vercel.app/'>
						<Image
							alt='Laptop Image'
							src='/BrewHausLaptop.png'
							width={500}
							height={300}
							className='flex-1'
						/>
					</Link>
					<div className='md:ml-2 max-w-md mt-6 md:mt-0'>
						<p className='text-xl text-justify'>
							Store Citizen is a chrome extension that quickly and easily shows
							you which ships are currently on sale in the Star Citizen store.
							This extension is built using React and Tailwind CSS.
						</p>
					</div>
				</div>
			</div>
		</BlurSection>
	);
}
