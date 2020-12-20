/* eslint-disable global-require */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: [
      './public/index.html',
      './src/components/**/*.js',
    ],
  },
  darkMode: false,
  theme: {
    colors: {
      amber: colors.amber,
      black: '#000',
      blue: colors.blue,
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      cyan: colors.cyan,
      emerald: colors.emerald,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      lightblue: colors.lightBlue,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      teal: colors.teal,
      truegray: colors.trueGray,
      violet: colors.violet,
      warmgray: colors.warmGray,
      white: '#fff',
      yellow: colors.yellow,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
