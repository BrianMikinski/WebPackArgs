'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    contentBase: './dist',
  },
};