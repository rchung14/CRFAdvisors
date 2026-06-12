/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A6B',
        'navy-dark': '#111E52',
        'blue-mid': '#3B5BDB',
        'blue-light': '#4C6EF5',
        'off-white': '#F8F9FC',
        ink: '#0D0D0D',
        'gray-mid': '#6B7280',
        'gray-light': '#E5E7EB',
        'gray-bg': '#F1F3F5',
        'accent-steel': '#CBD5E1',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #1B2A6B 0%, #3B5BDB 100%)',
      },
    },
  },
  plugins: [],
}
