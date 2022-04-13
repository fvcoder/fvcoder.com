module.exports = {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx,jsx,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        lightRed: "#F98982",
        red: "#F98282",
        purple: "#8482F9",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
