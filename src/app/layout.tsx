import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Small/header';
import Providers from './providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Esoteric Devs',
	description: 'Best portfolio in the known universe',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<div className='text-foreground bg-background'>
						<Header />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
