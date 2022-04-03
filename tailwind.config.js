
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/tw-elements/dist/css/**/*.css',
  ],
  theme: {
    fontFamily: {
      sans: ['Rosario', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        nav: 'url(\'../components/assets/images/bg-image.png\')',
        card: 'url(\'../components/assets/images/wood.png\')',
        carousel: 'url(\'../components/assets/images/carousel-bg.png\')',
        sidenav: 'url(\'../components/assets/images/sidenav-bg.png\')',
        scrollimage: 'url(\'../components/assets/images/scrollimage.png\')',
        banner: 'url(\'../components/assets/images/banner-bg.png\')',
      }),
      boxShadow: {
        inner: 'inset 0px 0px 15px 5px rgba(0, 0, 0, 0.75)',
        banner: 'inset 0px 4px 118px 48px rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwind-scrollbar'),
  ],
};
