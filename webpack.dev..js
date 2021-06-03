const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  devtool: "inline-source-map",
  stats: "verbose",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
};