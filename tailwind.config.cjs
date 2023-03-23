/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 
    extend: {
      colors: {
        mine : '#BBC5AA',
        beige : '#DDE2C6',
        teagreen: '#D0FFCE',
        Davygrey: '#635D5C',
        spacecadet: '#201E50',
        pink: "#AF7595",
        chocholatecosmos: '#5C1A1B',
        cambrigeblue : '#77ACA2',
      },
    },
  },
  plugins: [],
}