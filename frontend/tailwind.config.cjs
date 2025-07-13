/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',   // Purple
        accent: '#facc15',    // Yellow
        dark: '#1e1e2f',      // Background base
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
