module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        scrollimage: 'url(\'../components/assets/images/scroll.png\')',
      }),
      dropShadow: {
        treasure: '0 0.25rem 2.9375rem rgba(255, 214, 0, 0.25)',
        hover2: '0 0.25rem 2.0625rem rgba(255, 203, 69, 0.25)',
      },
    },
  },
  plugins: [],
};
