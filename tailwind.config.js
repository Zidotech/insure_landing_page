/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        VeryDarkViolet: " hsl(270, 9%, 17%)",
        DarkGrayishViolet: "hsl(273, 4%, 51%)",
        VeryLightGray: " hsl(0, 0%, 98%)",
        DarkViolet: " hsl(256, 26%, 20%)",
        GrayishBlue: " hsl(216, 30%, 68%)",
        GrayishWhite: " hsl(65, 52%, 96%)",
      },
      fontFamily: {
        heading: ["DM Serif Display", "serif"],
        body: ["Karla", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
