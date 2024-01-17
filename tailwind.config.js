/** @type {import('tailwindcss').Config} */
export default {
	content: ['./**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			sm: '580px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1366px',
			'3xl': '1440px',
			'4xl': '1880px',
		},
	},
	plugins: [],
};
