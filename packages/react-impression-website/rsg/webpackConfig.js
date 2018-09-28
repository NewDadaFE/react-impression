const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const devMode = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader',
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              configFile: '../../babel.config.js',
              cacheDirectory: devMode,
            },
          },
          {
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } },
              ],
            }),
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'build/bundle.[contenthash:8].css',
      disable: devMode,
    }),
    new OptimizeCssAssetsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
}
