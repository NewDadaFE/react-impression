const path = require('path')
const styles = require('./styles')

const resolvePath = relativePath => path.resolve(process.cwd(), relativePath)

module.exports = {
  title: 'React Impression',
  serverPort: 8080,
  require: [resolvePath('src/styles/index.scss')],
  assetsDir: resolvePath('rsg/assets'),
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')

    return `import { ${name} } from 'react-impression'`
  },
  template: {
    head: {
      links: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/icon.ico',
        },
        {
          rel: 'stylesheet',
          href: 'https://fe.imdada.cn/font-awesome/4.7.0/index.css',
        },
      ],
    },
  },
  theme: {
    color: {
      sidebarBackground: '#22252a',
    },
  },
  styles,
  sections: [
    {
      name: 'Introduction',
    },
    {
      name: 'Components',
      components: resolvePath('src/components/**/[A-Z]*.js'),
      // components: resolvePath('src/components/**/Flex*.js'),
    },
  ],
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
