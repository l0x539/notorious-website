
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/tw-elements/dist/css/**/*.css',
  ],
  theme: {
    fontFamily: {sans: ['Rosario', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        nav: 'url(\'../components/assets/images/bg-image.png\')',
        main: 'url(\'../components/assets/images/background-main.png\')',
        card: 'url(\'../components/assets/images/wood.png\')',
        carousel: 'url(\'../components/assets/images/carousel-bg.png\')',
        sidenav: 'url(\'../components/assets/images/sidenav-bg.png\')',
        nadjib: 'url(\'../assets/images/nadjib.png\')',
        natur: 'url(\'../assets/images/natur.png\')',
        pngwing: 'url(\'../assets/images/pngwing.png\')',
        wing: 'url(\'../assets/images/wing.png\')',
        notoriouspirateoutcast:
        'url(\'../assets/images/notoriouspirateoutcast.png\')',
      }),
      boxShadow: {
        inner: 'inset 0px 0px 15px 5px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
};
