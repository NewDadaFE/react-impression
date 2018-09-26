const path = require('path')
const theme = require('./theme')
const styles = require('./styles')
const webpackConfig = require('./webpackConfig')

const resolveLibrary = relativePath =>
  path.resolve(process.cwd(), '../react-impression', relativePath)

const resolveWebsite = relativePath => path.resolve(process.cwd(), relativePath)

module.exports = {
  title: 'React Impression',
  serverPort: 8080,
  require: [resolveLibrary('src/styles/index.scss')],
  assetsDir: 'assets',
  styleguideDir: '../dist',
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
          href: 'icon.ico',
        },
        {
          rel: 'stylesheet',
          href: 'https://fe.imdada.cn/font-awesome/4.7.0/index.css',
        },
      ],
    },
  },
  theme,
  styles,
  sections: [
    {
      name: 'Introduction',
      content: resolveWebsite('docs/Introduction.md'),
    },
    {
      name: 'Components',
      components: resolveLibrary('src/components/**/[A-Z]*.js'),
    },
  ],
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    StyleGuideRenderer: resolveWebsite('rsg/components/StyleGuideRenderer'),
  },
  webpackConfig,
}
