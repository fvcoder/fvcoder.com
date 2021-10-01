module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#585a96',
          500: '#6264a7',
          600: '#464775'
        },
        win: {
          100: '#ffffff',
          200: '#f3f3f3'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
