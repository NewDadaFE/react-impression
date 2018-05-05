const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const utils = require('./utils')
const { PORT, proxyTable } = require('./config')
const HOST = require('ip').address()

console.log(`available address => http://${HOST}:${PORT}`)
console.log(`available address => http://127.0.0.1:${PORT}`)
console.log(`available address => http://localhost:${PORT}`)

module.exports = merge(baseConfig, {
  entry: [utils.resolve('src/site/index.js'), `webpack-dev-server/client?http://${HOST}:${PORT}`],
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',

  output: {
    path: utils.resolve('dist'),
    filename: 'scripts/app.js',
    publicPath: `http://${HOST}:${PORT}/`
  },

  module: {
    rules: [
      utils.getStyleLoader({ type: 'css' }),
      utils.getStyleLoader({
        type: 'scss',
        include: [utils.resolve('./src/lib')],
        cssModules: false
      }),
      utils.getStyleLoader({
        type: 'scss',
        exclude: [utils.resolve('./src/lib')],
        cssModules: true
      })
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: JSON.stringify(true)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('./src/site/index.html'),
      inject: true
    })
  ],

  devServer: {
    host: '0.0.0.0',
    port: PORT,
    disableHostCheck: true,
    contentBase: './dist',
    hot: true,
    inline: true,
    progress: true,
    historyApiFallback: true,
    overlay: {
      errors: true
    },
    stats: {
      colors: true,
      chunks: false,
      children: false,
      modules: false
    },
    logLevel: 'debug',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: proxyTable
  }
})
