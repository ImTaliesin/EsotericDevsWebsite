import AboutMe from '@/components/UI/AboutMe';
import HeroSection from '@/components/UI/Hero';
import Projects from '@/components/UI/Projects';
import Background from '@/components/Small/backgroundSection';
import Contact from '@/components/UI/Contact';
import Footer from '@/components/UI/Footer';

export default function Home() {
	return (
		<div>
			<Background />
			<HeroSection />
			<div className='bg-neutral-950'>
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
				<div>
					<Footer />
				</div>
			</div>
		</div>
	);
}
