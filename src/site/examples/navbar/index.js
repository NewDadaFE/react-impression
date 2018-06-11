import React from 'react'
import Card from '@/site/components/Card'
import Default from './Default'
import Primary from './Primary'
import Pure from './Pure'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const NavbarAttrParams = [
  ['theme', '设置导航条样式，可选值为 pure、primary', 'string', '-'],
  ['className', '自定义样式', 'string', '-'],
]

const NavbarBrandAttrParams = [
  ['href', '设置连接', 'string', '-'],
  ['className', '自定义样式', 'string', '-'],
]

const NavbarAttrTable = transfer(NavbarAttrParams)
const NavbarBrandItemAttrTable = transfer(NavbarBrandAttrParams)

export default ({ routes, params }) => {
  return [
    <Breadcrumb routes={routes} params={params} />,
    <Wrapper title='Navbar导航栏' desc='多用于页面头部的导航栏组件'>
      <Card component={Default} />
      <Card component={Primary} />
      <Card component={Pure} />
      <MarkdownPreview markdown={NavbarAttrTable} name='Navbar API' />
      <MarkdownPreview
        markdown={NavbarBrandItemAttrTable}
        name='Navbar Brand API'
      />
    </Wrapper>,
  ]
}
