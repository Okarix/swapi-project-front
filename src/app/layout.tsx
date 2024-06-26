import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'SWAPI Project',
	description: 'This project was specifically designed as a homework assignment for the nfactorial incubator',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<ThemeProvider
				attribute='class'
				defaultTheme='dark'
			>
				<body className={inter.className}>{children}</body>
			</ThemeProvider>
		</html>
	);
}
