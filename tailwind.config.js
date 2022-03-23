
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        nav: 'url(\'../components/assets/images/bg-image.PNG\')',
        card: 'url(\'../components/assets/images/wood.png\')',
      }),
    },
  },
  plugins: [],
};
