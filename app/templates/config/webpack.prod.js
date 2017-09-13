/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const resolveApp = require('./paths');

const { npm_package_name: NAME, npm_package_version: VERSION } = process.env;

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolveApp('dist'),
    filename: 'scripts/app.js',
    publicPath: `//fe.imdada.cn/${NAME}/${VERSION}/`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolveApp('src'), /whatwg-fetch/],
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: [resolveApp('src/app/styles'), /node_modules/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.scss$/,
        include: [resolveApp('src/app/styles'), /node_modules/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:6].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    modules: [resolveApp('src'), 'node_modules'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
    }),
    new ExtractTextPlugin('styles/app.css'),
    new webpack.ContextReplacementPlugin(/moment\/locale$/, /zh-cn/),
  ],
  stats: {
    children: false,
  },
};
