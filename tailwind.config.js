/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#07111e',
          800: '#0c1a2e',
          700: '#132846',
          600: '#1b3860',
          500: '#264e82',
        },
        dusty: {
          900: '#23384c',
          700: '#3e5c7a',
          500: '#5c82a6',
          400: '#7ea4c9',
          300: '#a3c2e0',
          200: '#cbe0f2',
          100: '#eaf3fb',
          50: '#f4f9fd',
        },
        gold: {
          600: '#9d7b1b',
          500: '#b89228',
          400: '#d4af37',
          300: '#e5c558',
          200: '#f3dc8a',
          100: '#fbf3d5',
        },
        sand: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8ddce',
        }
      },
      fontFamily: {
        arabic: ['"Amiri"', '"Scheherazade New"', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        heading: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'islamic-pattern': "radial-gradient(rgba(212, 175, 55, 0.15) 1px, transparent 1px)",
        'gold-shimmer': 'linear-gradient(45deg, #b89228 0%, #f3dc8a 50%, #b89228 100%)',
        'navy-gradient': 'linear-gradient(180deg, #07111e 0%, #0c1a2e 50%, #132846 100%)',
        'soft-blue-gradient': 'linear-gradient(135deg, #eaf3fb 0%, #ffffff 50%, #cbe0f2 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
