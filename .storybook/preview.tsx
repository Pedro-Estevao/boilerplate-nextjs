import React from 'react';
import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import StyledComponentsRegistry from '../lib/registry';
import { Providers } from '../components/Providers';
import GlobalStyles from '../styles/global';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	},

	decorators: [
		(Story) => (
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
	]
};

export default preview;
