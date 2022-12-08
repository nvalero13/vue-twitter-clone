/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': "#1DA1F2",
        'darkblue': "#2795D9",
        'lightblue': "#8ECDF8",
        'lighterblue': "#EFF9FF",
        'lightgrey': "#E7E7E8",
        'dark': "#657786",
        'light': "#AAB8C2",
        'lighter': "#E1E8ED",
        'lightest': "#F5F8FA"
      },
    },
  },
  plugins: [],
}