/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:"#8E44AD",
        charcoal:"#34495E",
        red:'#C0392B',
        black:"#000000",
        white :'#FFFFFF',
        grey: '#F3F4F0'
      },
      margin: {
        '-50': '-50px',
      },
      fontSize: {
        '7.3xl': '5rem',      // Custom size of 5rem
        '7.5xl': '5.5rem',  // Custom size of 5.5rem
      },
    },
  },
  plugins: [],
};
