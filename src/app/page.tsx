import AboutMe from '@/components/UI/AboutMe';
import HeroSection from '@/components/UI/Hero';
import Script from 'next/script';

export default function Home() {
	return (
		<div>
			<Script
				src='//code.tidio.co/hadhdxoc2djou3bkex3rd6tvltarcwvp.js'
				strategy='lazyOnload'
				async
			/>
			<HeroSection />
			<AboutMe />
		</div>
	);
}
