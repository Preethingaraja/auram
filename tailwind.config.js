/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          magenta: '#8B1A6B',
          'magenta-dark': '#6d1454',
          'magenta-light': '#a82080',
          gold: '#F5C518',
          'gold-dark': '#d4a80f',
          light: '#F9F4F8',
          'light-dark': '#f0e6ec',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-medium': 'floatMedium 4s ease-in-out infinite',
        'float-fast': 'floatFast 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-3deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px) rotate(2deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-2deg)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #8B1A6B 0%, #6d1454 50%, #F5C518 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(139,26,107,0.95) 0%, rgba(109,20,84,0.85) 60%, rgba(245,197,24,0.4) 100%)',
      },
      boxShadow: {
        'brand': '0 4px 20px rgba(139,26,107,0.25)',
        'brand-lg': '0 8px 40px rgba(139,26,107,0.35)',
        'gold': '0 4px 20px rgba(245,197,24,0.3)',
      },
    },
  },
  plugins: [],
}
