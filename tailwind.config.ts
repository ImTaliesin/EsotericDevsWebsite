import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				
			},colors: {
				mybg: '#191919',
				mytext: '#FAFBFA',
				'bg-1': 'rgba(0, 0, 1, 0.865)',
        'bg-2': 'rgba(10, 17, 21, .9)',
				
			},
			fontFamily: {
				sans: ['Playfair Display', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
	
};
export default config;
