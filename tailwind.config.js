/* eslint-disable global-require */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./public/index.html', './src/components/**/*.js'],
  theme: {
    colors: {
      amber: colors.amber,
      black: colors.black,
      blue: colors.blue,
      bluegray: colors.slate,
      coolgray: colors.gray,
      cyan: colors.cyan,
      emerald: colors.emerald,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      sky: colors.sky,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      teal: colors.teal,
      truegray: colors.neutral,
      violet: colors.violet,
      warmgray: colors.stone,
      white: colors.white,
      yellow: colors.yellow,
      transparent: colors.transparent,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
