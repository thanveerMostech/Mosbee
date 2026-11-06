/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#020c4c',
          deep: '#020c4c',
          light: '#0a1a7a',
        },
        brand: {
          50: '#f0f3ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#020c4c',
          950: '#010626'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
