/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Red Hat Display', 'sans-serif']
    },
    extend: {},
  },
  variants: {
  },
  plugins: [],
}