import AboutMe from '@/components/UI/AboutMe';
import HeroSection from '@/components/UI/Hero';
import Script from 'next/script';
import Projects from '@/components/UI/Projects';
import Background from '@/components/Small/backgroundSection';
import Contact from '@/components/UI/Contact';


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
				<div id='About'></div>
				<AboutMe />
				<div id='Projects' className='m-2'></div>
				<Projects />
				<div id='Contact' className='m-2'></div>
				<Contact />
		</div>
	);
}
