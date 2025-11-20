/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#A0522D',
          DEFAULT: '#8B4513',
          dark: '#654321',
        },
        secondary: {
          light: '#EF4444',
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
        },
        'science-blue': {
          light: '#3b82f6',
          DEFAULT: '#1e3a8a',
          dark: '#1e40af',
        },
        'commerce-green': {
          light: '#10b981',
          DEFAULT: '#065f46',
          dark: '#047857',
        },
        'arts-purple': {
          light: '#a855f7',
          DEFAULT: '#6b21a8',
          dark: '#7c3aed',
        },
      },
    },
  },
  plugins: [],
}

