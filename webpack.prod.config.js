const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { debug } = process.env;
const prefix = debug === 'false' ? 'release' : 'debug';
// Create multiple instances
const extractCommonCSS = new ExtractTextPlugin(
  'styles/common.[contenthash:20].css');
const extractAppCss = new ExtractTextPlugin(
  'styles/app.[contenthash:20].css');

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].[chunkhash].js',
    publicPath: `https://fe.imdada.cn/${pkg.name}/${prefix}/`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src'), /whatwg-fetch/],
        loader: 'babel-loader',
      },
      {
        test: /\.scss|\.css$/,
        exclude: [path.resolve(__dirname, 'src/app/styles'), /node_modules/],
        use: extractAppCss.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.scss|\.css$/,
        include: [path.resolve(__dirname, 'src/app/styles'), /node_modules/],
        use: extractAppCss.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'src/app/styles/lib'), /node_modules/],
        use: extractCommonCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader'],
        }),
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:20].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:20].[ext]',
        },
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: JSON.stringify(false),
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
      favicon: 'src/app/images/favicon.ico',
      inject: true,
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./lib/manifest.json"),
    }),
    extractCommonCSS,
    extractAppCss,
  ],
  stats: {
    children: false,
  },
};
