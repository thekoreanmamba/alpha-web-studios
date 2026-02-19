/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#030B18',
          900: '#040C1A',
          800: '#071224',
          700: '#0D1F3C',
        },
      },
      keyframes: {
        'spin-border': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'spin-border': 'spin-border 6s linear infinite',
        'fade-up':     'fade-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
