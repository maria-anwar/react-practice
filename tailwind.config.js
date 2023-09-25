/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }

      'md': '780px',
      // => @media (min-width: 960px) { 1366px... }

      'lg': '1024px', //height of laptop is 667
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      
    },
  },
  plugins: [],
};
