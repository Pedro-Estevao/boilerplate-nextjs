import React from 'react';
import type { Preview, StoryFn } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import StyledComponentsRegistry from '../lib/registry';
import { Providers } from '../components/Providers';
import GlobalStyles from '../styles/global';
import '../public/styles/tailwind-import.css';

export const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		},
		backgrounds: {
			default: 'light',
			values: [
				{
					name: 'light',
					value: '#FAFAFA'
				},
				{
					name: 'dark',
					value: '#06092B'
				}
			]
		}
	}
};

export const decorators: Parameters<StoryFn<unknown>>[0][] = [
	(Story: React.ComponentType) => (
		<StyledComponentsRegistry>
			<Providers>
				<GlobalStyles />
				<Story />
			</Providers>
		</StyledComponentsRegistry>
	),
	withThemeByClassName({
		themes: {
			light: 'light',
			dark: 'dark'
		},
		defaultTheme: 'light'
	})
];
