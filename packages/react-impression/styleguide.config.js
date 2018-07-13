const path = require('path')

module.exports = {
  title: 'React Impression',
  serverPort: 8080,
  require: [path.join(__dirname, 'src/styles/index.scss')],
  components: 'src/components/**/[A-Z]*.js',
  showUsage: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')

    return `import { ${name} } from 'react-impression'`
  },
  webpackConfig: {
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
  },
}
