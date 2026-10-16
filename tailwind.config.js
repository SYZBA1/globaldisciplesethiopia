/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0D2744',
          'navy-dark': '#081729',
          'navy-light': '#1A3C64',
          'navy-muted': '#24456F',
          gold: '#E28723',
          'gold-hover': '#C97116',
          'gold-light': '#FFF6ED',
          'gold-subtle': '#FDF0E1',
          cream: '#FAF7F2',
          sand: '#F3EFE6',
          stone: '#F4F5F7',
          charcoal: '#1A232E',
          muted: '#5B687A',
        },
        ethiopia: {
          green: '#1E6B38',
          yellow: '#EAB308',
          red: '#B91C1C',
        },
        gd: {
          blue: '#006CD8',
          'blue-dark': '#0053A8',
          'blue-light': '#EBF5FF',
          yellow: '#F2BA13',
          'yellow-hover': '#DBA408',
          pink: '#DE3654',
          ice: '#F2F9FA',
          slate: '#2C3E50',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        display: ['Lora', 'Plus Jakarta Sans', 'Georgia', 'serif'],
        ethiopic: ['"Noto Sans Ethiopic"', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(13, 39, 68, 0.08)',
        'elevated': '0 12px 32px -4px rgba(13, 39, 68, 0.12)',
        'accent': '0 4px 20px rgba(226, 135, 35, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
