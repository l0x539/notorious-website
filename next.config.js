/** @type {import('next').NextConfig} */
const withSvgr = require('next-svgr');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withSvgr({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
module.exports = nextConfig;
