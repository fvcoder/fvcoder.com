/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./node_modules/flowbite-react/**/*.js", "./app/**/*.{ts,tsx,jsx,js}"],
	theme: {
		extend: {},
	},
	plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
