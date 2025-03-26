/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Neue"', 'cursive'],
      },
    },
  },
  
      colors: {
        brand: {
          DEFAULT: '#0077b6',
          light: '#00b4d8',
          background: '#f1f9fc',
        },
      },
      boxShadow: {
        soft: '0 4px 14px rgba(0, 118, 182, 0.15)',
      },
      transitionDuration: {
        DEFAULT: '250ms',
      },
    },
  },
  plugins: [],
}
