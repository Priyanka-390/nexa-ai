/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins':'Poppins'
      },
      backgroundSize: {
        'size': '100% 100%'
      }
    },
  },
  plugins: [],
}