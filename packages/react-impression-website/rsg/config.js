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
          href: 'https://at.alicdn.com/t/font_2010704_0skvm4f627s.css',
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
      name: 'Layout 布局',
      description: '布局组件，用于辅助页面结构的布局工作。',
      content: resolveWebsite('docs/Layout.md'),
      sectionDepth: 1,
      components: resolveComponents(['Row', 'Col', 'Flex', 'FlexItem']),
    },
    {
      name: 'General 通用',
      description: '基础通用组件。',
      sectionDepth: 1,
      components: resolveComponents([
        'Button',
        'ButtonGroup',
        'Ico',
        'Split',
        'Switch',
        'TextLink',
        'Trigger',
      ]),
    },
    {
      name: 'Navigation 导航',
      description: '导航组件，用于页面功能模块的指示和引导。',
      sectionDepth: 1,
      components: resolveComponents([
        'Breadcrumb',
        'Dropdown*',
        'Nav',
        'NavItem',
        'Navbar',
        'Pagination',
        'Sidebar',
        'SidebarHeader',
        'Tabs',
        'TabPane',
      ]),
    },
    {
      name: 'Data Entry 信息录入',
      description: '表单组件，用于采集用户输入的信息。',
      sectionDepth: 1,
      components: resolveComponents([
        'Checkbox*',
        'DatePicker',
        'Form',
        'FormGroup',
        'Input',
        'InputGroup*',
        'Radio*',
        'Search',
        'Select*',
        'Upload',
        'TimeSelect',
      ]),
    },
    {
      name: 'Data Display 数据展示',
      description: '数据展示组件，优化页面内容的展示效果。',
      sectionDepth: 1,
      components: resolveComponents([
        'Calendar',
        'Card',
        'Collapse',
        'Image',
        'ListGroup*',
        'Popover',
        'Table',
        'TableColumn',
        'Tag',
        'Timeline*',
        'Tooltip',
        'Steps',
        'Step',
      ]),
    },
    {
      name: 'Feedback 反馈',
      description: '页面输出内容组件，丰富和优化网页对用户行为作出的反馈。',
      sectionDepth: 1,
      components: resolveComponents([
        'Attention*',
        'Badge',
        'Confirm',
        'Loading',
        'Message',
        'Modal',
        'Notification',
        'Popconfirm',
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
    ComponentsListRenderer: resolveWebsite(
      'rsg/components/ComponentsListRenderer'
    ),
  },
  webpackConfig,
}
