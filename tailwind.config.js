module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,html}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js'
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
