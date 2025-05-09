/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#F0F5FF',
          100: '#E1EAFE',
          200: '#C3D5FD',
          300: '#9BBCFB',
          400: '#709CF8',
          500: '#4B7CF5',
          600: '#2563EB', // Primary color
          700: '#1D50C8',
          800: '#1A3FA0',
          900: '#17347D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};