/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0fafa',
          100: '#d0f0ee',
          200: '#a2e1dd',
          300: '#6dccc6',
          400: '#3eb8b1',
          500: '#2aa39c',
          600: '#218480',
          700: '#1a6a67',
          800: '#155250',
          900: '#103f3d',
        },
        gold: {
          400: '#e8c56a',
          500: '#d4a843',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
