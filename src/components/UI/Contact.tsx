import Link from 'next/link';
import BlurSection from '../Small/blurSection';
import Image from 'next/image';

export default function Contact() {
	return (
		<BlurSection>
			<div
				id='Contact'
				className='flex m-14 flex-col justify-top items-center'>
				<h1 className='font-sans text-4xl font-bold'>Contact Me</h1>
				<div className='relative mt-4 mb-2 h-1 w-12 bg-violet-600 rounded-full'></div>
			</div>
		</BlurSection>
	);
}
