/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#FFF7ED',   // orange-50: lively warm white
          beige: '#FFEDD5',   // orange-100: soft energetic cream
          primary: '#EA580C', // orange-600: vibrant vibrant primary
          accent: '#F59E0B',  // yellow-500: playful pop
          brown: '#9A3412',   // orange-800: rich warm dark
          dark: '#431407',    // orange-950: deepest contrast
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px rgba(67, 20, 7, 1)', // for high-energy cards
        'brutal-hover': '2px 2px 0px 0px rgba(67, 20, 7, 1)',
      }
    },
  },
  plugins: [],
};
