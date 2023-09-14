'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export default function ThemeProviderWrapper({
	children
}: {
	children: ReactNode;
}) {
	return (
		<ThemeProvider
			attribute="data-theme-mode"
			defaultTheme="system"
			themes={['light', 'dark', 'system']}
		>
			{children}
		</ThemeProvider>
	);
}
