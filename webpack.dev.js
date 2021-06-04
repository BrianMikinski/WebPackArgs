'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  devtool: "inline-source-map",
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
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    contentBase: './dist',
  },
};