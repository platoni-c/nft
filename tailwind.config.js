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
        mainBG: "hsl(217, 54%, 11%)",
        cardBG: "hsl(216, 50%, 16%)",
        line: "hsl(215, 32% 27%)",
        white: "hsl(0, 0% 88%)",
        hoverLinks: "hsl(178, 100%, 50%)",
      },
    },
  },
  plugins: [],
};
