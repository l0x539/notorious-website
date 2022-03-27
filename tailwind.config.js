
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        banner: 'url(\'../components/assets/images/banner-bg.png\')',
      }),
      boxShadow: {
        inner: 'inset 0px 4px 118px 48px rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
};
