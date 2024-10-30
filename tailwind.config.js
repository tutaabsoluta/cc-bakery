/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#4A1D1F',
        primary_light: '#7A4D4F',
        secondary: '#F2C674',
        white_secondary: '#FEECEB',
        terciary: '#F9BF4E',
      },
    },
  },
  plugins: [],
}
