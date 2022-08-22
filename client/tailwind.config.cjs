/** @type {import('tailwindcss').Config} */
withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-blinker': 'Blinker',
        'font-capriola': 'Capriola'
      }
    },
  },
  plugins: [],
});