const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const config = require('./package.json')

const paths = {
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
  html: path.resolve(__dirname, 'src/index.html'),
  css: path.resolve(__dirname, 'src/app/styles'),
}

const names = {
  image: 'images/[name].[hash:6].[ext]',
  font: 'fonts/[name].[ext]',
  css: 'styles/app.css',
  js: 'scripts/app.js',
}

const common = {
  output: {
    path: paths.dist,
    filename: names.js,
    publicPath: '/',
  },
  resolve: {
    alias: {
      src: paths.src,
    },
    modules: [paths.src, 'node_modules'],
    symlinks: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.html,
      inject: true,
    }),
    new webpack.ContextReplacementPlugin(/moment\/locale$/, /zh-cn/),
  ],
}

const development = {
  entry: ['react-hot-loader/patch', paths.src],
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
        oneOf: [
          {
            test: /\.js$/,
            include: [paths.src, /whatwg-fetch/],
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          // CSS Modules
          // [name].module.css
          {
            test: /\.module\.s?css$/,
            exclude: /node_modules/,
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
          // Regular CSS
          // name.css
          {
            test: /\.s?css$/,
            exclude: /node_modules/,
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
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: 'errors-only',
    proxy: config.proxy || {},
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(true),
    }),
  ],
}

const production = env => {
  let {
    npm_package_name: NAME,
    npm_package_version: VERSION,
    npm_package_deploy_DOMAIN: DOMAIN,
  } = process.env

  if (env.debug) VERSION = new Date().toJSON().replace(/\D/g, '')

  return {
    entry: paths.src,
    output: {
      publicPath: `//${DOMAIN}/${NAME}/${VERSION}/`,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [paths.src, /whatwg-fetch/],
          loader: 'babel-loader',
        },
        // Regular CSS
        // name.css
        {
          test: /\.s?css$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'sass-loader'],
          }),
        },
        // CSS Modules
        // [name].module.css
        {
          test: /\.module\.s?css$/,
          exclude: /node_modules/,
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
          test: /\.(png|jpe?g|gif|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: names.image,
          },
        },
        {
          test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: names.font,
          },
        },
        {
          test: /\.(xlsx?)$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'static/[name].[ext]',
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
      new CleanWebpackPlugin([paths.dist]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
        DEBUG: JSON.stringify(false),
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          ecma: 8,
        },
      }),
      new ExtractTextPlugin(names.css),
      new ManifestPlugin({
        seed: {
          name: NAME,
          version: VERSION,
        },
      }),
    ],
  }
}

module.exports = env =>
  env.development ? merge(common, development) : merge(common, production(env))
