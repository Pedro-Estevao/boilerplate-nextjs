import GlobalStyles from "@/public/styles/global";
import React, { ReactNode } from 'react';
import StyledComponentsRegistry from "@/lib/registry";
import ThemeProviderWrapper from '@/components/Wrappers/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'React Avançado - Boilerplate',
	description: 'A simple project starter to work with TypeScrip, React, NextJS and Styled Components',
	icons: '/img/icon-512.png',
	manifest: 'manifest.json'
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<GlobalStyles />
				<StyledComponentsRegistry>
					<ThemeProviderWrapper>
						{children}
					</ThemeProviderWrapper>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
};