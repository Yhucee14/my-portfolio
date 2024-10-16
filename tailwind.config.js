// const {fontFamily} = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['var(--font-quicksand)'],
      },
      colors: {
        rightGray: '#333333',
        leftBlue: '#004d99',
        rightBlue: '#002147',
        leftOrange: '#ffcc99',
        rightOrange: '#ff9966',
        blue: 'rgb(0 21 28)'
        
      },
      screens: {
        xx: "320px",
        xs: "412px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1400px",
        xl: "1700px",
      },

      backgroundImage: {
        circularLight: ' repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 60px);'
      }
    },
  },
  plugins: [],
}