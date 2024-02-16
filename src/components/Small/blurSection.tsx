interface SectionProps {
	children: React.ReactNode; // Use `children` to accept any number of child components
 }
 
 export default function BlurSection({ children }: SectionProps) {
	return (
	  <div className="relative overflow-hidden dark:rounded-none">
		 <div className={`flex mx-auto w-[100vw] h-full absolute inset-0 z-1 bg-zinc-100/80 dark:bg-neutral-950/95 dark:blur-none`}>
		 </div>
		 {/* Content with adjusted text color for dark mode */}
		 <div className="relative z-10 text-black dark:text-gray-300">{children}</div>
	  </div>
	);
 }
 