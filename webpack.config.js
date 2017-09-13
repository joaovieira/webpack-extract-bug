const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  plugins: [new ExtractTextPlugin('styles.css'), new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
    ],
  },
};

module.exports = config;
