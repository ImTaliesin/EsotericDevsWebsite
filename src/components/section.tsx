import SVGComponent from './svgComponent';

interface SectionProps {
	children: React.ReactNode; // Use `children` to accept any number of child components
}

export default function Section({ children }: SectionProps) {
	return (
		<div className='relative h-[900px] overflow-hidden'>
			<SVGComponent className='w-full h-full absolute inset-0 z-0 blur-sm blur-' />
			{/* Content */}
			<div className='relative z-10'>{children}</div>
		</div>
	);
}
