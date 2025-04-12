/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
        },
        secondary: {
          DEFAULT: '#D4B98C',
          light: '#E5D4B7',
          dark: '#B39A6E',
        },
        accent: {
          DEFAULT: '#8C3A3A',
          light: '#A85454',
          dark: '#6E2E2E',
        },
        background: {
          DEFAULT: '#F5F5F5',
          dark: '#E5E5E5',
        },
        text: {
          DEFAULT: '#1A1A1A',
          light: '#4A4A4A',
          lighter: '#6A6A6A',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        'display-large': ['5rem', { lineHeight: '1.1' }],
        'display-medium': ['3.5rem', { lineHeight: '1.2' }],
        'display-small': ['2.5rem', { lineHeight: '1.3' }],
        'heading-large': ['2rem', { lineHeight: '1.3' }],
        'heading-medium': ['1.5rem', { lineHeight: '1.4' }],
        'heading-small': ['1.25rem', { lineHeight: '1.5' }],
        'body-large': ['1.125rem', { lineHeight: '1.6' }],
        'body-medium': ['1rem', { lineHeight: '1.6' }],
        'body-small': ['0.875rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
