module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9fafb',
          100: '#eff0fb',
          200: '#ddd5f7',
          300: '#bfafec',
          400: '#a984df',
          500: '#915fd3',
          600: '#7743bf',
          700: '#59329b',
          800: '#3d236d',
          900: '#221640'
        },
        gr: {
          500: '#E5E9F2'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
}
