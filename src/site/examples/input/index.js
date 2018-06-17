import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Basic from './Basic'
import Size from './Size'
import Auffix from './Auffix'
import TextArea from './TextArea'
import KeyEnter from './KeyEnter'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const inputAttrParams = [
  ['size', '尺寸，small, default, large', 'string', 'default'],
  ['value', 'input值', 'any', '-'],
  ['defaultValue', 'input默认值', 'any', '-'],
  ['onKeyEnter', '按下回车键', 'function', '-'],
  ['disabled', '是否可以点击', 'boolean', 'false'],
  ['onChange', 'input改变回调函数', 'function', '-'],
  ['className', '自定义样式', 'string', '-'],
  ['pill', '是否为圆角', 'boolean', 'false'],
  ['onIconClick', 'suffix图标存在时，点击触发函数', 'function', '-'],
]

const textAreaAttrParams = [
  [
    'autoResize',
    '自适应内容高度，可以为boolean或者例如{ minRows: 1, maxRows: 3 }',
    'boolean &brvbar; object',
    'false',
  ],
  ['value', 'input值', 'any', '-'],
  ['defaultValue', 'input默认值', 'any', '-'],
  ['onKeyEnter', '按下回车键', 'function', '-'],
]

const inputAttrTable = transfer(inputAttrParams)
const textAreaAttrTable = transfer(textAreaAttrParams)

const InputExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper
        title='Input输入框'
        desc='通过鼠标或键盘输入内容，是最基础的表单组件'
      >
        <Card component={Basic} />
        <Card component={Size} />
        <Card component={Auffix} />
        <Card component={KeyEnter} />
        <Card component={TextArea} />
        <MarkdownPreview markdown={inputAttrTable} name='Input API' />
        <MarkdownPreview markdown={textAreaAttrTable} name='TextArea API' />
      </Wrapper>
    </div>
  )
}

InputExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default InputExample
