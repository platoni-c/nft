/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "440px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        mainBG: "#2b2f44",
        cardBG: "rgb(33, 50, 73)",
        line: "hsl(215, 32% 27%)",
        white: "hsl(0, 0% 88%)",
      },
    },
  },
  plugins: [],
};
