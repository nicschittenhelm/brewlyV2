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
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #f97316, #ea580c)'
      },
    }
  },
  plugins: [],
}