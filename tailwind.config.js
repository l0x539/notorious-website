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
  ],

  theme: {
    extend: {},
  },

  plugins: [require('tw-elements/dist/plugin')],
};
