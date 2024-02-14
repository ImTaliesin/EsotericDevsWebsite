import SVGComponent from './svgComponent';

interface SectionProps {
	children: React.ReactNode; // Use `children` to accept any number of child components
}

export default function BackgroundSection({ children }: SectionProps) {
	return (
		<div className='overflow-hidden'>
			<SVGComponent className='w-full h-full absolute inset-0 z-1 blur-sm' />
			{/* Content */}
			<div className='relative z-10'>{children}</div>
		</div>
	);
}
