const path = require('path')
const theme = require('./theme')
const styles = require('./styles')
const webpackConfig = require('./webpackConfig')

const resolveLibrary = relativePath =>
  path.resolve(process.cwd(), '../react-impression', relativePath)

const resolveComponents = list =>
  list.map(item => resolveLibrary(`src/components/${item}/[A-Z]*.js`))

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
      name: 'General',
      components: resolveComponents(['Button*', 'Icon', 'Image']),
    },
    {
      name: 'Layout',
      components: resolveComponents(['Row', 'Col', 'Flex*']),
    },
    {
      name: 'Navigation',
      components: resolveComponents([
        'Breadcrumb',
        'Dropdown*',
        'InlineSelect*',
        'Nav',
        'Nav[A-Z]*',
        'Navbar*',
        'Pagination',
        'Sidebar*',
      ]),
    },
    {
      name: 'Data Entry',
      components: resolveComponents([
        'Checkbox*',
        'Datepicker',
        'Form*',
        'Input*',
        'Radio*',
        'Select*',
        'Switch',
        'Upload',
      ]),
    },
    {
      name: 'Data Display',
      components: resolveComponents([
        'Badge',
        'Calendar',
        'Card*',
        'Collapse*',
        'ListGroup*',
        'Popover',
        'Table*',
        'Tag',
        'Timeline*',
        'Tooltip',
      ]),
    },
    {
      name: 'Feedback',
      components: resolveComponents([
        'Alert',
        'Attention*',
        'Confirm',
        'Loading',
        'Message',
        'Modal*',
        'Notification',
        'Progress',
      ]),
    },
  ],
  styleguideComponents: {
    'slots/UsageTabButton': resolveWebsite('rsg/components/UsageTabButton'),
    'slots/CodeTabButton': resolveWebsite('rsg/components/CodeTabButton'),
    PropsRenderer: resolveWebsite('rsg/components/PropsRenderer'),
    TableRenderer: resolveWebsite('rsg/components/TableRenderer'),
    PlaygroundRenderer: resolveWebsite('rsg/components/PlaygroundRenderer'),
    StyleGuideRenderer: resolveWebsite('rsg/components/StyleGuideRenderer'),
  },
  webpackConfig,
}
