/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    body: ['"Quicksand"'],
    extend: {
      colors: {
        'light-coffee': '#C89F94',
      },
    },
  },
  plugins: [],
};
