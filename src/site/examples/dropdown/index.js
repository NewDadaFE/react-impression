import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Basic from './Basic'
import Disabled from './Disabled'
import Trigger from './Trigger'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const dropdownAttr = [
  ['trigger', '设置触发动作，可选值为 click、hover', 'string', 'click'],
  ['active', '是否激活', 'boolean', 'false'],
  ['className', '自定义样式', 'string', ''],
]

const menuAttr = [
  ['right', '下拉列表靠右', 'boolean', 'false'],
  ['toggleMenu', '切换回调函数', 'function', ''],
  ['className', '自定义样式', 'string', ''],
]

const dividerAttr = [['className', '自定义样式', 'string', '']]

const menuItemAttr = [
  ['disabled', '是否不可点击', 'boolean', 'false'],
  ['onClick', '点击回调', 'function', ''],
  ['toggleMenu', '切换回调函数', 'function', ''],
  ['className', '自定义样式', 'string', ''],
]

const triggerAttr = [
  ['trigger', '触发方式', 'click/hover', ''],
  ['toggleMenu', '切换回调函数', 'function', ''],
  ['className', '自定义样式', 'string', ''],
]

const dropdownAttrTable = transfer(dropdownAttr)
const menuTable = transfer(menuAttr)
const dividerTable = transfer(dividerAttr)
const menuItemTable = transfer(menuItemAttr)
const triggerTable = transfer(triggerAttr)

const DropdownExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Dropdown 下拉菜单' desc='将动作或菜单折叠到下拉菜单中'>
        <Card component={Basic} />
        <Card component={Disabled} />
        <Card component={Trigger} />
        <MarkdownPreview markdown={dropdownAttrTable} name='Dropdown API' />
        <MarkdownPreview markdown={menuTable} name='Dropdown.Menu API' />
        <MarkdownPreview
          markdown={dividerTable}
          name='Dropdown.MenuDivider API'
        />
        <MarkdownPreview
          markdown={menuItemTable}
          name='Dropdown.MenuItem API'
        />
        <MarkdownPreview markdown={triggerTable} name='Dropdown.Trigger API' />
      </Wrapper>
    </div>
  )
}

DropdownExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default DropdownExample
