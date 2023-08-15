const defaultConfig = require("tailwindcss/defaultTheme")
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', ...defaultConfig.fontFamily.serif],
			},
		},
	},
	plugins: [
		nextui(),
		require('@tailwindcss/typography'),
	],
}
