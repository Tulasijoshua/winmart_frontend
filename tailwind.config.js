/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ss': '350px',

      'xs': '475px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... } 

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        midLight: "#DDC862",
        midBlack: "#9D8822",
        midDark: "#342D0B",
        light: "#F4EDCB",
        midGreen: "#34886D",
        midGray: "#fef7ff",
        blackClr: "#000",
        whiteClr: "#fff",
        blue: "#1877F2",
        lightBlue: "#1D9BF0",
        lightBlack: "rgba(0, 0, 0, 0.7)",
        sideBack: "#9498FF4D",
        lightLight: "#CCC4624D",
        carLight: "#CCC462",
        checkClr: "#07A58D"
      }
    },
  },
  plugins: [],
}

