// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires
const { gray } = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,html}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js'
  ],
  darkMode: 'none',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '980px',
      xl: '980px',
      '2xl': '980px'
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        gray: {
          ...gray,
          500: '#6B7280',
          800: '#1F2937'
        }
      }
    }
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
}
