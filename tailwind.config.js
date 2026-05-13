/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./vedic-cosmic-theme/**/*.php",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        card: "hsl(var(--color-card) / <alpha-value>)",
        gold: {
          light: "hsl(var(--color-gold-light) / <alpha-value>)",
          DEFAULT: "hsl(var(--color-gold) / <alpha-value>)",
        },
        copper: "hsl(var(--color-copper) / <alpha-value>)",
        cream: "hsl(var(--color-cream) / <alpha-value>)",
        muted: "hsl(var(--color-muted) / <alpha-value>)",
        ruby: "hsl(var(--color-ruby) / <alpha-value>)",
        teal: "hsl(var(--color-teal) / <alpha-value>)",
        celestial: "hsl(var(--color-celestial) / <alpha-value>)",
      },
      fontFamily: {
        hero: ['"Cinzel Decorative"', "cursive"],
        sub: ['"Cormorant Garamond"', "serif"],
        body: ['"EB Garamond"', "serif"],
        accent: ['"Josefin Sans"', "sans-serif"],
        sanskrit: ['"Noto Serif Devanagari"', "serif"],
      },
      animation: {
        'spin-slow': 'spin 120s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
