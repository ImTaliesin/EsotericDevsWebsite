import BlurSection from '../Small/blurSection';
import WhiteSection from '../Small/whiteSection';
export default function Projects() {
	return (
		<WhiteSection>
			<div id='Projects'className='flex flex-col justify-center items-center lg:h-[45vh] h-[55vh]'>
				<h1 className='font-sans text-4xl font-bold'>Projects</h1>
				<div className='relative h-1 w-12 bg-violet-600 rounded-full'></div>
				<p className='text-center max-w-2xl px-6'>Projects here</p>
			</div>
		</WhiteSection>
	);
}
