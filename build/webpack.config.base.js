const path = require('path')
const utils = require('./utils')

module.exports = {
  entry: {
    app: utils.resolve('src/site/index.js')
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': utils.resolve('src'),
      'react-impression': utils.resolve('src/lib/components/index')
    },
    modules: [utils.resolve('src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [utils.resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [utils.resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:12].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:12].[ext]'
        }
      }
    ]
  },

  stats: {
    colors: true,
    children: false,
    modules: false,
    warnings: false
  }
}
