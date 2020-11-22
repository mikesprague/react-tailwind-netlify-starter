require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const mode = process.env.NODE_ENV;

const webpackRules = [
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: true,
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  },
  {
    test: /\.(js|jsx)$/,
    exclude: [/node_modules/, /lambda/, /service-worker.js/],
    use: [{
      loader: 'babel-loader',
    }],
  },
];

const webpackPlugins = [
  new MiniCssExtractPlugin({
    filename: './css/styles.css',
    chunkFilename: './css/[id].[chunkhash].css',
  }),
  // new CopyWebpackPlugin({
  //   patterns: [
  //     {
  //       from: './public/images/**/*',
  //       to: './images',
  //       flatten: true,
  //       force: true,
  //     },
  //   ],
  // }),
  // new CopyWebpackPlugin({
  //   patterns: [
  //     {
  //       from: './public/fonts/*.woff2',
  //       to: './css/fonts',
  //       flatten: true,
  //       force: true,
  //     },
  //   ],
  // }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: `./public/manifest.json`,
        to: './',
        flatten: true,
        force: true,
      },
    ],
  }),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
    inject: false,
  }),
  new WorkboxPlugin.GenerateSW({
    cleanupOutdatedCaches: true,
    clientsClaim: true,
    skipWaiting: true,
  }),
  new CompressionPlugin(),
  new webpack.HotModuleReplacementPlugin(),
];

module.exports = {
  entry: [
    './src/index.js',
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    filename: './js/[name].js',
    chunkFilename: './js/[id].[chunkhash].js',
    path: path.resolve(__dirname, 'build'),
  },
  mode,
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    hotOnly: true,
    open: true,
    port: 3000,
    publicPath: 'http://localhost:3000/',
    stats: 'minimal',
  },
  module: {
    rules: webpackRules,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: webpackPlugins,
};
