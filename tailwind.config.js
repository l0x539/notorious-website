module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        sidenav: 'url(\'../components/assets/images/sidenav-bg.png\')',
      }),
      boxShadow: {
        inner: 'inset 0px 0px 15px 5px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
