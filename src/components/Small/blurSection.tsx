interface SectionProps {
	children: React.ReactNode; // Use `children` to accept any number of child components
}

export default function BlurSection({ children }: SectionProps) {
	return (
		<div className='relative overflow-hidden rounded-lg  '>
			<div className='flex mx-auto w-[100vw] h-full absolute inset-0 z-1 rounded-3xl bg-zinc-100/80 dark:bg-stone-600 blur-sm' />
			{/* Content */}
			<div className='relative z-10'>{children}</div>
		</div>
	);
}
