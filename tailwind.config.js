/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Tech-savvy sites live in dark mode
  theme: {
    extend: {
      colors: {
        // Deep, rich terminal/IDE inspired tones
        cyber: {
          bg: '#09090b',       // Deep zinc-950
          surface: '#18181b',  // Zinc-800
          border: '#27272a',   // Zinc-700
          accent: '#06b6d4',   // Electric Cyan
          glow: 'rgba(6, 182, 212, 0.15)',
          success: '#10b981',  // Emerald Green
        },
      },
      fontFamily: {
        // Clean sans for reading, sharp mono for data/metrics
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
