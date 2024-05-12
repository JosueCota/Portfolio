/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'showcase': "1fr 1fr"
      },
      colors: {
        "grey": "#254955"
      }
    },
  },
  plugins: [],
}