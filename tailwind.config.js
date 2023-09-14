/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
	darkMode: ['class', '[data-theme-mode="dark"]'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundColor: {
				light: '#f3f3f3',
				dark: '#0b0b0c'
			},
			spacing: {
				18: '4.5rem'
			},
			fontFamily: {
				sans: ['Gilroy', 'sans-serif']
			},
			colors: {
				blue: {
					600: '#006FF9'
				}
			}
		},
		screens: {
			xs: '375px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1400px',
			'max-xs': { max: '374px' },
			'max-sm': { max: '575px' },
			'max-md': { max: '767px' },
			'max-lg': { max: '991px' },
			'max-xl': { max: '1199px' },
			'max-xxl': { max: '1399px' }
		}
	},
	plugins: []
};

module.exports = tailwindConfig;
