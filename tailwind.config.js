module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: ["light", "forest"],
  },

  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
    },
  },

  plugins: [require("daisyui")],
};
