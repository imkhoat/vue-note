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
      ...colors,
      primary: { ...colors.green },
      neutral: { ...colors.slate },
      negative: { ...colors.rose },
      gray: { ...colors.gray },
      white: '#FFF',
    },
  },
  plugins: [],
};
