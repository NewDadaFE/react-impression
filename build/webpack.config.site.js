const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const utils = require('./utils')
const baseConfig = require('./webpack.config.base')
const pkg = require('../package.json')
const config = require('./config')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: '#source-map',
  output: {
    path: utils.resolve('site'),
    filename: 'scripts/[name].[chunkhash:8].js',
    publicPath: config.publicPathPrefix ? `${config.publicPathPrefix}/${pkg.name}` : ''
  },

  module: {
    rules: [
      // utils.getStyleLoader({ type: 'css' }),
      // utils.getStyleLoader({
      //   type: 'scss',
      //   include: [utils.resolve('./src/lib')],
      //   sourceMap: true,
      //   extract: true,
      //   cssModules: false
      // }),
      // utils.getStyleLoader({
      //   type: 'scss',
      //   exclude: [utils.resolve('./src/lib')],
      //   cssModules: true,
      //   sourceMap: true,
      //   extract: true
      // })
      {
        test: /\.scss$/,
        exclude: [utils.resolve('./src/lib'), /node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        include: [utils.resolve('./src/lib'), /node_modules/],
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        include: [utils.resolve('./src/lib'), /node_modules/],
        use: [
          'style-loader',
          'css-loader',

        ]
      },
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: {
      name: 'asset-manifest'
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('src/site/index.html'),
      favicon: utils.resolve('src/site/images/favicon.ico'),
      inject: true,
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        maxLineLength: 80
      }
    }),
    new CleanWebpackPlugin([utils.resolve('site')], {
      root: process.cwd()
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:12].css',
      chunkFilename: 'styles/[name].[contenthash:12].css'
    }),
    new webpack.ContextReplacementPlugin(/moment\/locale$/, /zh-cn/)
  ]
})
