import SVGComponent from './svgComponent';

interface SectionProps {
	children: React.ReactNode; // Use `children` to accept any number of child components
}

export default function BackgroundSection({ children }: SectionProps) {
	// Define a custom style for the gradient overlay
	const gradientOverlayStyle = {
	  background: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8))',
	};
 
	return (
	  <div className='overflow-hidden'>
		 <SVGComponent className='w-full h-full absolute inset-0 z-0' />
		 {/* Gradient Overlay */}
		 <div style={gradientOverlayStyle} className='w-full h-full absolute inset-0 z-10' />
		 {/* Content */}
		 <div className='relative z-20'>{children}</div>
	  </div>
	);
 }
 