import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ThinkHighly Apps Brand Colors
        brand: {
          // Dark purple (main brand color)
          primary: '#4C1D95',
          // Medium purple
          secondary: '#7C3AED', 
          // Light purple
          accent: '#A78BFA',
          // Lightest purple
          light: '#DDD6FE',
          // Bright purple/vibrant
          vibrant: '#E879F9',
          // Pink accent
          pink: '#EC4899',
        },
        // Semantic color aliases using brand colors
        purple: {
          50: '#F5F3FF',
          100: '#DDD6FE',
          200: '#C084FC',
          300: '#A78BFA',
          400: '#7C3AED',
          500: '#4C1D95',
          600: '#3730A3',
          700: '#2E1065',
          800: '#1E1B4B',
          900: '#1E1B4B',
        },
        pink: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config
