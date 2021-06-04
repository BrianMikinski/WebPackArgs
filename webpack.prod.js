'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "production",
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html",
              esModule: false
            },
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
            options: {
              sources: false,
              esModule: false
            }
          }
        ]
      },
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    contentBase: './dist',
  },
  optimization: {
    minimize: true,
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
          terserOptions: {
            compress: {},
          }
        }).apply(compiler);
      },
    ]
  },
};