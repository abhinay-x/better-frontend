/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        better: {
          green: '#0f5f3d',
          emerald: '#2ad37d',
          dark: '#0a3b2b',
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(80% 50% at 50% 0%, #0e6a47 0%, #0a3b2b 60%, #06281e 100%)',
        'ai-gradient': 'linear-gradient(90deg, #1ddf76 0%, #46e0f0 35%, #a96dfa 70%, #f472b6 100%)',
      }
    },
  },
  plugins: [],
}
