const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const vendor = [
  'react', 'react-router', 'react-redux',
  'viewerjs', 'antd', 'moment',
  'lodash'
];

module.exports = {
  entry: {
    vendor: vendor,
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name]_[hash].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new CleanWebpackPlugin(['lib']),
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
    new webpack.DllPlugin({
      path: path.join(__dirname, 'lib', 'manifest.json'),
      name: '[name]_[hash]',
      context: __dirname,
    }),
    new webpack.ContextReplacementPlugin(/moment\/locale$/, /zh-cn/),
  ],
  stats: {
    children: false,
  },
};
