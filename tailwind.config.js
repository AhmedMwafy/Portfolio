/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // ---- COLORS: change these to re-theme the whole site ----
      colors: {
        ink: "#070B10",    // page background
        panel: "#0D131B",  // card background
        edge: "#1B2633",   // borders and lines
        fg: "#E6ECF2",     // main text
        muted: "#94A3B3",  // secondary text
        accent: "#4CC9F0", // cyan accent
      },
      // ---- FONTS (loaded in src/app/layout.js) ----
      fontFamily: {
        sans: ["Barlow", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        display: ['"Barlow Condensed"', "Barlow", "system-ui", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
