import AboutMe from '@/components/UI/AboutMe';
import HeroSection from '@/components/UI/Hero';
import Projects from '@/components/UI/Projects';
import Background from '@/components/Small/backgroundSection';
import Contact from '@/components/UI/Contact';
import Footer from '@/components/UI/Footer';

export default function Home() {
	return (
		<div className='bg-neutral-950'>
			<Background />

			<main>
				<HeroSection />

				<section id='About'>
					<AboutMe />
				</section>

				<section
					id='Projects'
					className='mt-4'>
					<Projects />
				</section>

				<section
					id='Contact'
					className='mt-4'>
					<Contact />
				</section>
			</main>

			<Footer />
		</div>
	);
}
