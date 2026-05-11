/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:   '#FAF7F2',
        charcoal:'#333333',
        sage: {
          100: '#edf0ec',
          200: '#d4dcd2',
          300: '#bccab9',
          400: '#A8B5A2',
          500: '#8fa088',
          600: '#728070',
        },
        dust: {
          100: '#e8eff5',
          200: '#d0e0eb',
          300: '#AFC6D9',
          400: '#91afc6',
          500: '#7298b3',
        },
        sand: {
          100: '#f5ede0',
          200: '#ecdbc4',
          300: '#D8C3A5',
          400: '#c4a882',
          500: '#a98a61',
        },
        peach: {
          100: '#faf0ea',
          200: '#f5dfd3',
          300: '#EBC9B5',
          400: '#dca f96',
          500: '#cc9478',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.65rem',
      },
    },
  },
  plugins: [],
}
