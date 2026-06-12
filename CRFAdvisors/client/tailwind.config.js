/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1A4480',
        'navy-dark': '#11305E',
        'blue-mid': '#2774CC',
        'blue-light': '#4D94E8',
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
        'blue-gradient': 'linear-gradient(135deg, #1A4480 0%, #2E7FD9 100%)',
      },
    },
  },
  plugins: [],
}
