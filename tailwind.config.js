/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Encode Sans', 'sans-serif'], 
      },
      colors: {
        customBrown: '#594d42',
        customDark: '#333333',
      },
    }
  },
  plugins: [],
}