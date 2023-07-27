const defaultConfig = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', ...defaultConfig.fontFamily.serif],
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
