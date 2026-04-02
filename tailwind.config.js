/** @type {import('tailwindcss').Config} */
module.exports = {
  // We are keeping your updated content paths!
  content: [
    './App.{js,ts,tsx}', 
    './app/**/*.{js,ts,tsx}', 
    './components/**/*.{js,ts,tsx}'
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#0B0D10',
        foreground: '#F3F4F6',
        primary: {
          DEFAULT: '#0066FF',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#2C3036',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#1F2329',
          foreground: '#9CA3AF',
        },
        accent: {
          DEFAULT: '#D4FF00',
          foreground: '#000000',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF', // Assuming standard white text on destructive buttons
        },
        card: {
          DEFAULT: '#16191D',
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: '#16191D',
          foreground: '#FFFFFF',
        },
        border: '#2A2E35',
        input: '#0F1114',
        ring: '#0066FF',
        chart: {
          1: '#0066FF',
          2: '#D4FF00',
          3: '#9333EA',
          4: '#F59E0B',
          5: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};