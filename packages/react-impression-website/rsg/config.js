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
      name: 'Examples',
      href: 'examples/',
    },
    {
      name: 'General',
      description: '基础内容组件。',
      components: resolveComponents(['Button*', 'Icon', 'Image']),
    },
    {
      name: 'Layout',
      description: '布局组件，用于辅助页面结构的布局工作。',
      components: resolveComponents(['Row', 'Col', 'Flex*']),
    },
    {
      name: 'Navigation',
      description: '导航组件，用于页面功能模块的指示和引导。',
      components: resolveComponents([
        'Breadcrumb',
        'Dropdown*',
        'InlineSelect*',
        'Nav',
        'Nav[A-Z]*',
        'Navbar',
        // 'NavbarBrand',
        'NavbarButton',
        'NavbarLink',
        'Pagination',
        'Sidebar*',
      ]),
    },
    {
      name: 'Data Entry',
      description: '表单组件，用于采集用户输入的信息。',
      components: resolveComponents([
        'Checkbox*',
        'DatePicker',
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
      description: '数据展示组件，优化页面内容的展示效果。',
      components: resolveComponents([
        'Badge',
        'Calendar',
        'Card*',
        'Collapse*',
        'ListGroup*',
        'Popover',
        'Table',
        // 'TableBody',
        'TableColumn',
        // 'TableHead',
        'Tag',
        'Timeline*',
        'Tooltip',
        'Steps',
        'StepNode',
      ]),
    },
    {
      name: 'Feedback',
      description: '页面输出内容组件，丰富和优化网页对用户行为作出的反馈。',
      components: resolveComponents([
        // 'Alert',
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
