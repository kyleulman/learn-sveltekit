const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	}
};
