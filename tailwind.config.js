/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xxs': '375px',
      'xs':  '42px',

      'sm': '640px', //confusion here
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      'xl': '1221px',
      '2xl': '1536px',
          
    },
    extend: {
      fontFamily:{
        volkhov:['Volkhov', 'serif']
      },
     
    },
  },
  plugins: [],
};
