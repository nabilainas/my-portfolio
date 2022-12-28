/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#212b3a", //black (blue charcoal)
        secondary: "#2e3d61", // bleu marine
        dimGreen: "#d7e9db", // vert
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "#366a81", // kind of blue / green
        dimsecondBlue: "#80b0b8", // kind of blue / green
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
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
