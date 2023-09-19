const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './'
});

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	collectCoverage: true,
	// coverageProvider: 'v8',
	collectCoverageFrom: [
		'app/*.ts(x)?',
		'app/**/*.ts(x)?',
		'components/*.stories.ts(x)?',
		'components/**/*.stories.ts(x)?',
		'!lib/registry.tsx',
		'!**/*.d.ts',
		'!**/node_modules/**',
		'!**/stories/**',
		'!<rootDir>/out/**',
		'!<rootDir>/.next/**',
		'!<rootDir>/.storybook/**',
		'!<rootDir>/*.config.js',
		'!<rootDir>/coverage/**'
	],
	moduleNameMapper: {
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
		'^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
		'^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,
		'^@/components/(.*)$': '<rootDir>/components/$1',
		'^@/app/(.*)$': '<rootDir>/app/$1',
		'^styled-components':
			'<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
	},
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
	},
	transformIgnorePatterns: [
		'/node_modules/',
		'/.next/',
		'^.+\\.module\\.(css|sass|scss)$'
	]
};

module.exports = createJestConfig(customJestConfig);
