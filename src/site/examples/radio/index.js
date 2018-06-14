import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Basic from './Basic'
import Disabled from './Disabled'
import Group from './Group'
import Column from './Column'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const radioAttrParams = [
  ['name', '名称', 'any', '-'],
  ['value', '返回值', 'any', '-'],
  ['checked', '是否选中', 'boolean', '-'],
  ['defaultChecked', '默认是否选中', 'boolean', '-'],
  ['disabled', '是否可以点击', 'boolean', 'false'],
  ['onChange', '状态变更回调函数', 'function', '-'],
  ['className', '自定义样式', 'string', '-'],
]

const radioGroupAttrParams = [
  ['name', '名称', 'any', '-'],
  ['disabled', '是否可以点击', 'boolean', 'false'],
  ['onChange', '状态变更回调函数', 'function', '-'],
  ['className', '自定义样式', 'string', '-'],
  ['direction', '排列方向，可选值为 row、column', 'string', 'row'],
]

const apiParams = [
  ['Radio.getValue(ref)/RadioGroup.getValue(ref)', 'Radio/RadioGroup的value'],
]

const radioAttrTable = transfer(radioAttrParams)
const radioGroupAttrTable = transfer(radioGroupAttrParams)
const apiTable = transfer(apiParams)

const RadioExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Radio单选框' desc='单选框'>
        <Card component={Basic} />
        <Card component={Disabled} />
        <Card component={Group} />
        <Card component={Column} />
        <MarkdownPreview markdown={radioAttrTable} name='Radio API' />
        <MarkdownPreview markdown={radioGroupAttrTable} name='RadioGroup API' />
        <MarkdownPreview markdown={apiTable} name='方法' />
      </Wrapper>
    </div>
  )
}

RadioExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default RadioExample
