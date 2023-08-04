// const {fontFamily} = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['var(--font-quicksand)'],
      },
      colors: {
        leftGray: '#4a4a4a',
        rightGray: '#333333',
        leftBlue: '#004d99',
        rightBlue: '#002147',
        leftOrange: '#ffcc99',
        rightOrange: '#ff9966',
      },
    },
  },
  plugins: [],
}