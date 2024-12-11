/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'loading': 'loading 2s infinite',
      },
      keyframes: {
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  safelist: [
    'bg-green-50',
    'bg-yellow-50',
    'text-green-500',
    'text-yellow-500',
    'from-green-400',
    'to-green-500',
    'from-yellow-400',
    'to-yellow-500',
  ],
  plugins: [],
};