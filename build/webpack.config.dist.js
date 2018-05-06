const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const utils = require('./utils')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: '#source-map',
  entry: utils.resolve('src/lib/components/index.js'),
  output: {
    path: utils.resolve('dist'),
    filename: 'index.js',
    library: 'react-impression',
    libraryTarget: 'umd'
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
    }),
    new CleanWebpackPlugin([utils.resolve('dist')], {
      root: process.cwd()
    }),
    new webpack.ContextReplacementPlugin(/moment\/locale$/, /zh-cn/)
  ]
})
