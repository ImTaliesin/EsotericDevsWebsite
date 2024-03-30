interface SectionProps {
	children: React.ReactNode; // Use `children` to accept any number of child components
 }
 
 export default function BlurSection({ children }: SectionProps) {
	return (
	  <div className="relative overflow-hidden ">
		 <div className={`flex mx-auto w-full h-full absolute inset-0 z-1 bg-black/70 `}>
		 </div>
		 {/* Content with adjusted text color for dark mode */}
		 <div className="relative z-10  dark:text-gray-300">{children}</div>
	  </div>
	);
 }
 