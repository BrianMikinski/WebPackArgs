'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "production",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
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