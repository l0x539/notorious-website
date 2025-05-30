
module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './layout/**/*.{js,ts,jsx,tsx}',
    ],

    // These options are passed through directly to PurgeCSS
    options: {
      safelist: [
        {
          pattern: /^(grid-cols|grid-rows|gap|left|right)-.*/,
        },
      ],
    },
  },

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/tw-elements/dist/css/**/*.css',
  ],

  theme: {
    fontFamily: {sans: ['Rosario'],
    },
    extend: {
      backgroundImage: (theme) => ({
        nav: 'url(\'../components/assets/images/bg-image.png\')',
        main: 'url(\'../components/assets/images/background-main.png\')',
        card: 'url(\'../components/assets/images/wood.png\')',

        carousel: 'url(\'../components/assets/images/carousel-bg.png\')',
        sidenav: 'url(\'../components/assets/images/sidenav-bg.png\')',

        nadjib: 'url(\'../components/assets/images/nadjib.png\')',
        natur: 'url(\'../components/assets/images/natur.png\')',
        pngwing: 'url(\'../components/assets/images/pngwing.png\')',
        wing: 'url(\'../components/assets/images/wing.png\')',
        notoriouspirateoutcast:
        'url(\'../components/assets/images/notoriouspirateoutcast.png\')',
        scrollimage: 'url(\'../components/assets/images/scrollimage.png\')',
        banner: 'url(\'../components/assets/images/banner-bg.png\')',
        news: 'url(\'../components/assets/images/news-header.png\')',
        header: 'url(\'../components/assets/images/kingsheadd.png\')',
        members: 'url(\'../components/assets/images/devilsanvel.png\')',
        nfts: 'url(\'../components/assets/images/South_Idol.png\')',
        maproad: 'url(\'../components/assets/images/redarrow.png\')',
      }),
      boxShadow: {
        inner: 'inset 0px 0px 15px 5px rgba(0, 0, 0, 0.75)',
        banner: 'inset 0px 4px 118px 48px rgba(0, 0, 0, 0.75)',
        articles: 'inset 0px 4px 171px 90px rgba(0, 0, 0, 0.75)',
      },
      colors: {
        'notorious-golden': {
          100: '#C0AB75',
          500: '#FFCB45',
        },
      },
      screens: {
        '2xl': '1476px',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwind-scrollbar'),
  ],
};

