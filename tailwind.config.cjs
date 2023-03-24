/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    "../src/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: '#A8FF35',
        mainGray: '#8B8B8B',
        hoverGreen: '#87D322',
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    }
  },
  plugins: [],

}