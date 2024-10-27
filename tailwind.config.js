/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Añadimos la fuente "Poppins"
      },
      colors: {
        primary: '#4A1D1F',
        primary_light: '#7A4D4F',
      },
    },
  },
  plugins: [],
}
