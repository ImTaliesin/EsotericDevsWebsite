import AboutMe from '@/components/UI/AboutMe';
import HeroSection from '@/components/UI/Hero';
import Script from 'next/script';
import Projects from '@/components/UI/Projects';
import Background from '@/components/Small/backgroundSection';
import DarkModeToggle from '@/components/UI/DarkMode';

export default function Home() {
	return (
		<div>
			<Background/>
				<Script
					src='//code.tidio.co/hadhdxoc2djou3bkex3rd6tvltarcwvp.js'
					strategy='lazyOnload'
					async
				/>
				<HeroSection />
				<div id='about'></div>
				<AboutMe />
				<div id='Projects' className='m-16'></div>
				<Projects />
				<DarkModeToggle />
		</div>
	);
}
