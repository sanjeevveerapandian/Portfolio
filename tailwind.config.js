/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Ensure this line is included
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006d77',
        secondary: '#83c5be',
        background: '#edf6f9',
        cardBackground: '#ffffff',
      },
    },
  },
  plugins: [],
};
