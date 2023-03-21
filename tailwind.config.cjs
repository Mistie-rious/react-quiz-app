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
        beige : '#DDE2C6'
      },
    },
  },
  plugins: [],
}