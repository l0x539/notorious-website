/* eslint linebreak-style: ["error", "windows"]*/

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        nav: 'url(\'../components/atoms/assets/bg-image.PNG\')',
      }),
    },
  },
  plugins: [],
};
