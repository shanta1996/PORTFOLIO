/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'emeraldText':'#10b981'
      },
      backgroundColor:{
        'mainBg':'#17202a'
      }
    },
  },
  plugins: [],
}