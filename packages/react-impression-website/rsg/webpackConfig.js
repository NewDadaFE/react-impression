const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader',
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(['dist'], { root: process.cwd() })],
}
