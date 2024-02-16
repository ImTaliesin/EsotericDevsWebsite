

interface SectionProps {
	children: React.ReactNode; // Use `children` to accept any number of child components
}

export default function WhiteSection({ children}: SectionProps) {
	return (
		<div className='relative overflow-hidden'>
			<div className='w-[70vw] h-full absolute inset-0 z-0 blur-sm bg-neutral-100 my-20' />
			{/* Gradient Overlay */}
			<div
				style={{
					background:
						'linear-gradient(rgba(245, 245, 245, 0.2), rgba(245, 245, 245, 0.3))',
				}}
				className='absolute w-full h-full inset-0 z-10'
			/>
			{/* Content */}
			<div className='relative z-10'>{children}</div>
		</div>
	);
}
