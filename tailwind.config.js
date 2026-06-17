/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'],
      },

      colors: {
        background: '#000000',
        surface: '#050505',
        muted: '#8a8a8a',
        accent: '#7f1d1d',
      },

    },
  },

  plugins: [],
}