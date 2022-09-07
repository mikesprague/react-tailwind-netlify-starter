/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

// safelist any necessary classes here
const cssSafelistClassArray = [];

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss'),
    require('cssnano')({
      preset: 'default',
    }),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/index.html', './src/index.jsx', './src/components/**/*.jsx'],
      fontFace: false,
      safelist: cssSafelistClassArray,
    }),
  ],
};
