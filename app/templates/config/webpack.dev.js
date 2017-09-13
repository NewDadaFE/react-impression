const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const resolveApp = require('./paths')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/main.js',
  ],
  output: {
    path: resolveApp('dist'),
    filename: 'scripts/app.js',
    publicPath: 'http://localhost:8080/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: { failOnError: true },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        include: [resolveApp('src'), /whatwg-fetch/],
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.scss$/,
        exclude: [resolveApp('src/app/styles'), /node_modules/],
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        include: [resolveApp('src/app/styles'), /node_modules/],
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader?sourceMap',
          'sass-loader?sourceMap',
        ],
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
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: resolveApp('dist'),
    historyApiFallback: true,
    hot: true,
    stats: {
      chunks: false,
      children: false,
    },
    proxy: {},
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
    }),
    new ExtractTextPlugin('styles/app.css'),
    new webpack.ContextReplacementPlugin(/moment\/locale$/, /zh-cn/),
  ],
}
