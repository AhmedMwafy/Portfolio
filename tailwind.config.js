/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // ---- COLORS: change these to re-theme the whole site ----
      colors: {
        ink: "#0B0F14",     // page background (charcoal)
        panel: "#111826",   // card background
        edge: "#1F2836",    // borders and lines
        fg: "#F8F8F6",      // main text (off-white)
        muted: "#8B93A1",   // secondary text
        accent: "#2563EB",  // electric blue accent
        good: "#22C55E",    // status-dot green
      },
      // ---- FONTS (loaded in src/app/layout.js) ----
      fontFamily: {
        sans: ["Barlow", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        display: ['"Barlow Condensed"', "Barlow", "system-ui", "Arial", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
