/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        glassLight: "rgba(255,255,255,0.6)",
        glassDark: "rgba(20,20,20,0.6)",
        accent: "#6366f1",
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        hero: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
