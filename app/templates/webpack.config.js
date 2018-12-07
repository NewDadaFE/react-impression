const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const pkg = require('./package.json')

const paths = {
  input: {
    html: path.resolve(__dirname, 'public/index.html'),
    css: path.resolve(__dirname, 'src/app/styles'),
    js: path.resolve(__dirname, 'src'),
  },
  output: path.resolve(__dirname, 'build'),
}

const names = {
  media: 'static/media/[name].[hash:8].[ext]',
  css: 'static/css/[name].[contenthash:8].css',
  js: 'static/js/[name].[chunkhash:8].js',
}

const common = {
  output: {
    path: paths.output,
  },
  resolve: {
    alias: {
      src: paths.input.js,
    },
    modules: [paths.input.js, 'node_modules'],
    symlinks: false,
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new Dotenv({ systemvars: true }),
    new WatchMissingNodeModulesPlugin(path.resolve('node_modules')),
    new webpack.ContextReplacementPlugin(/moment\/locale$/, /zh-cn/),
    new HtmlWebpackPlugin({
      template: paths.input.html,
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
  ],
}

const development = {
  entry: ['react-hot-loader/patch', paths.input.js],
  output: {
    publicPath: '/',
    filename: 'static/js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        },
      },
      {
        test: /\.js$/,
        include: paths.input.js,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.s?css$/,
        exclude: [paths.input.css, /node_modules/],
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
        test: /\.s?css$/,
        include: [paths.input.css, /node_modules/],
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader?sourceMap',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(xlsx?)$/,
        loader: 'url-loader',
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    stats: 'errors-only',
    proxy: pkg.proxy || {},
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(true),
    }),
  ],
}

const production = {
  entry: paths.input.js,
  output: {
    publicPath: `//${pkg.deploy.DOMAIN}/${pkg.name}/`,
    filename: names.js,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.input.js,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        exclude: [paths.input.css, /node_modules/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        }),
      },
      {
        test: /\.s?css$/,
        include: [paths.input.css, /node_modules/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: names.media,
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: names.media,
        },
      },
      {
        test: /\.(xlsx?)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: names.media,
        },
      },
    ],
  },
  stats: {
    children: false,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
  plugins: [
    new CleanWebpackPlugin([paths.output]),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(false),
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8,
      },
    }),
    new ExtractTextPlugin(names.css),
  ],
}

module.exports = merge(
  common,
  process.env.NODE_ENV === 'development' ? development : production
)
