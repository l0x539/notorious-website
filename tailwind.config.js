
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
          }),            
        },
    },
    plugins:  [
      require('tw-elements/dist/plugin'),
    ],
};
