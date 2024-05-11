/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'showcase': "1.4fr 1fr"
      },
      gridTemplateRows: {
        "projects": "90% 1fr"
      }
    },
  },
  plugins: [],
}