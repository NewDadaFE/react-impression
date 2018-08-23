const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
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
            options: {
              cacheDirectory: process.env.NODE_ENV === 'development',
            },
          },
          {
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader', options: { sourceMap: true } },
              { loader: 'sass-loader', options: { sourceMap: true } },
            ],
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(['dist'], { root: process.cwd() })],
}
