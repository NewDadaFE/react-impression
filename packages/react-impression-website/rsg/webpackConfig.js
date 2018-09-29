const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin()],
  },
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
              cacheDirectory: process.env.NODE_ENV === 'development',
            },
          },
          {
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: [
              {
                loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              },
              { loader: 'css-loader', options: { sourceMap: true } },
              { loader: 'sass-loader', options: { sourceMap: true } },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'build/bundle.[contenthash:8].css',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
}
