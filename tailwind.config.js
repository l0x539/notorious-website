module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/tw-elements/dist/css/**/*.css',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        carousel: 'url(\'../components/assets/images/carousel-bg.png\')',

      }),
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
};

