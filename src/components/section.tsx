import React from 'react';

interface SectionProps {
	children: React.ReactNode; // Use `children` to accept any number of child components
}

export default function Section({ children }: SectionProps) {

	return <div className='flex h-[900px] bg-indigo-600'>{children}</div>;
}
