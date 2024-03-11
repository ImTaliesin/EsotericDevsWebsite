import AboutMe from '@/components/UI/AboutMe';
import HeroSection from '@/components/UI/Hero';
import Projects from '@/components/UI/Projects';
import Background from '@/components/Small/backgroundSection';
import Contact from '@/components/UI/Contact';

export default function Home() {
	return (
		<div>
			<Background />

			<HeroSection />
			<div id='About'>
				<AboutMe />
			</div>

			<div
				id='Projects'
				className='mt-4'>
				<Projects />
			</div>

			<div
				id='Contact'
				className='mt-4'>
				<Contact />
			</div>
		</div>
	);
}
