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
