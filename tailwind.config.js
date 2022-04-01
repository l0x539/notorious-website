
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Rosario', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        nav: 'url(\'../components/assets/images/bg-image.png\')',
        card: 'url(\'../components/assets/images/wood.png\')',
      }),
    },
  },
  plugins: [],
};
