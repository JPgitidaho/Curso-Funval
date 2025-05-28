// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'], // ajusta según tu estructura
  theme: {
    extend: {
      animation: {
        zoomSlow: 'zoomSlow 20s ease-in-out infinite',
      },
      keyframes: {
        zoomSlow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
module.exports = {
  content: ["./index.html"],
  safelist: ['animate-logoIntro'],
  theme: {
    extend: {
      keyframes: {
        logoIntro: {
          '0%': { opacity: '0', transform: 'scale(0.8) rotate(-10deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
      },
      animation: {
        logoIntro: 'logoIntro 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}



