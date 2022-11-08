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
  require: [
    resolveLibrary('src/styles/index.scss'),
    path.resolve('rsg/setup.js'),
  ],
  assetsDir: 'assets',
  styleguideDir: '../dist',
  skipComponentsWithoutExample: true,
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
          href: 'https://fe.imdada.cn/font_2010704_rfjum55w8n.css',
        },
      ],
    },
  },
  theme,
  styles,
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction 介绍',
      content: resolveWebsite('docs/Introduction.md'),
    },
    {
      name: 'Color 颜色',
      content: resolveWebsite('docs/Color.md'),
    },
    {
      name: 'Typography 排版',
      content: resolveWebsite('docs/Typography.md'),
    },
    {
      name: '布局类',
      description: '布局组件，用于辅助页面结构的布局工作。',
      content: resolveWebsite('docs/Layout.md'),
      sectionDepth: 1,
      components: resolveComponents(['Row', 'Col', 'Flex', 'FlexItem']),
    },
    {
      name: '通用类',
      description: '基础通用组件。',
      sectionDepth: 1,
      components: resolveComponents([
        'Ico',
        'Button',
        'ButtonGroup',
        'Switch',
        'TextLink',
        'Split',
        'Trigger',
      ]),
    },
    {
      name: '导航类',
      description: '导航组件，用于页面功能模块的指示和引导。',
      sectionDepth: 1,
      components: resolveComponents([
        'Breadcrumb',
        'Nav',
        'NavItem',
        'Navbar',
        'Menu',
        'Tabs',
        'TabPane',
        'Dropdown*',
        'Pagination',
        'PageHeader',
        'Sidebar',
        'SidebarHeader',
      ]),
    },
    {
      name: '信息展示类',
      description: '数据展示组件，优化页面内容的展示效果。',
      sectionDepth: 1,
      components: resolveComponents([
        'Tag',
        'Calendar',
        'Popover',
        'Tooltip',
        'Collapse',
        'Image',
        'Table',
        'TableColumn',
        'ListGroup*',
        'Steps',
        'Step',
        'Timeline*',
        'Card',
      ]),
    },
    {
      name: '信息录入类',
      description: '表单组件，用于采集用户输入的信息。',
      sectionDepth: 1,
      components: resolveComponents([
        'Radio*',
        'Checkbox*',
        'Select*',
        'Cascader',
        'TreeSelect',
        'DatePicker',
        'TimeSelect',
        'Input',
        'InputGroup*',
        'Form',
        'FormGroup',
        'Search',
        'Upload',
      ]),
    },
    {
      name: '信息反馈类',
      description: '页面输出内容组件，丰富和优化网页对用户行为作出的反馈。',
      sectionDepth: 1,
      components: resolveComponents([
        'Badge',
        'Message',
        'Confirm',
        'Popconfirm',
        'Notification',
        'Modal',
        'Loading',
        'Progress',
        'Attention*',
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
    ComponentsListRenderer: resolveWebsite(
      'rsg/components/ComponentsListRenderer'
    ),
  },
  webpackConfig,
}
