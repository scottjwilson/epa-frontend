module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'

  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
    },
  },

  // plugins: [require("@tailwindcss/typography")],
};
