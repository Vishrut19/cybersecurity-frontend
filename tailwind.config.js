// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0A0A0A", // custom dark background
        card: "#1A1A1A", // dark gray for cards
        primary: "#B6FF5E", // neon green
        secondary: "#1F1F1F", // optional, for accents
      },
      boxShadow: {
        glow: "0 0 10px #B6FF5E, 0 0 20px #B6FF5E",
      },
      keyframes: {
        neon: {
          "0%, 100%": { boxShadow: "0 0 10px #B6FF5E, 0 0 20px #B6FF5E" },
          "50%": { boxShadow: "0 0 20px #B6FF5E, 0 0 40px #B6FF5E" },
        },
      },
      animation: {
        neon: "neon 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
