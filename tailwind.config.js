/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '950px',
      // => @media (min-width: 1280px) { ... }
      
      'xl': '1100px',

      '2xl': '1270px'
    },
    extend: {},
  },
  plugins: [],
}

