import type { StorybookConfig } from '@storybook/nextjs';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
	stories: [
		'../components/**/*.stories.@(ts|tsx)',
		'../app/**/*.stories.@(ts|tsx)'
	],
	addons: ['@storybook/addon-essentials'],
	framework: {
		name: '@storybook/nextjs',
		options: {
			builder: {
				fsCache: true,
				lazyCompilation: true
			}
		}
	},
	docs: {
		autodocs: 'tag'
	},
	staticDirs: ['../public'],
	core: {},
	webpackFinal: async (config) => {
		if (config.resolve) {
			config.resolve.plugins = [
				...(config.resolve.plugins || []),
				new TsconfigPathsPlugin({
					extensions: config.resolve.extensions
				})
			];
		}
		return config;
	}
};
export default config;
