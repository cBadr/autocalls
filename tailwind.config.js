/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1E40AF',
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        accent: {
          DEFAULT: '#EA580C',
          light: '#F97316',
          dark: '#C2410C',
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-border': 'pulse-border 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-border': {
          '0%': { boxShadow: '0 0 0 0 rgba(30, 64, 175, 0.4)' },
          '70%': { boxShadow: '0 0 0 10px rgba(30, 64, 175, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(30, 64, 175, 0)' },
        },
      },
    },
  },
  plugins: [],
};