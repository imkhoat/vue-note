/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      padding: '2rem',
    },
    colors: {
      primary: { ...colors.green },
    },
  },
  plugins: [],
};
