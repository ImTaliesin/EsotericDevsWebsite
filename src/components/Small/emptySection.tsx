

interface SectionProps {
	children: React.ReactNode; // Use `children` to accept any number of child components
}

export default function emptySection({ children}: SectionProps) {
	return (
		<div className='relative overflow-hidden'>
			<div className='w-full h-full absolute inset-0 z-0 blur-sm bg-white' />
			{/* Content */}
			<div className='relative z-10'>{children}</div>
		</div>
	);
}
