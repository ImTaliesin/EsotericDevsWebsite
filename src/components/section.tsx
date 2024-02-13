import React from 'react';

interface SectionProps {
	children: React.ReactNode; // Use `children` to accept any number of child components
}

export default function Section({ children }: SectionProps) {

	return <div className='section'>{children}</div>;
}
