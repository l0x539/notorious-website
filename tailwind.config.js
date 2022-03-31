module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        woodbg: 'url(\'../components/assets/images/bg-wood.png\')',
        // section: 'url(\'../components/assets/images/sectionbg.png\')',
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
