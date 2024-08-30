/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'zoom-in-out': 'zoomInOut 0.2s ease-in-out'
      },
      keyframes: {
        zoomInOut: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' }
        }
      },
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