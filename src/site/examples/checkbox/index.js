import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Basic from './Basic'
import Disabled from './Disabled'
import Group from './Group'
import Column from './Column'
import Uncertain from './Uncertain'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const checkBoxAttrParams = [
  ['checked', '是否选中', 'boolean', '-'],
  ['defaultChecked', '默认是否选中', 'boolean', '-'],
  ['disabled', '是否可以点击', 'boolean', 'false'],
  ['onChange', '状态变更回调函数', 'function', '-'],
  ['className', '自定义样式', 'string', '-'],
  ['uncertain', '是否半选模式', 'boolean', 'false'],
]

const checkBoxGroupAttrParams = [
  ['value', '设置选中项', 'array', '-'],
  ['disable', '是否可以点击', 'boolean', 'false'],
  ['onChange', '状态变更回调函数', 'function', '-'],
  ['className', '自定义样式', 'string', '-'],
  ['direction', '排列方向，可选值为 row、column', 'string', 'row'],
]

const apiParams = [['ref.getValue()', 'CheckBox/CheckBoxGroup获取value']]

const checkBoxAttrTable = transfer(checkBoxAttrParams)
const checkBoxGroupAttrTable = transfer(checkBoxGroupAttrParams)
const apiTable = transfer(apiParams)

const CheckboxExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Checkbox 多选框' desc='一组备选项中进行多选'>
        <Card component={Basic} />
        <Card component={Disabled} />
        <Card component={Group} />
        <Card component={Column} />
        <Card component={Uncertain} />
        <MarkdownPreview markdown={checkBoxAttrTable} name='Checkbox API' />
        <MarkdownPreview
          markdown={checkBoxGroupAttrTable}
          name='Checkbox.Group API'
        />
        <MarkdownPreview markdown={apiTable} name='方法' />
      </Wrapper>
    </div>
  )
}

CheckboxExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default CheckboxExample
