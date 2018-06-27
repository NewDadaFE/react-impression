import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Button from './Button'
import Addon from './Addon'
import Size from './Size'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const groupAttrParams = [
  ['size', '设置输入框组大小，可选值为 sm、lg', 'string', ''],
  ['className', '自定义样式', 'string', ''],
]

const addonAttrParams = [
  ['pure', '显示成文字', 'boolean', 'false'],
  ['className', '自定义样式', 'string', ''],
]

const buttonAttrParams = [
  [
    'theme',
    '设置输入框组内按钮样式，可选值为 default、primary',
    'string',
    'primary',
  ],
  ['className', '自定义样式', 'string', ''],
]

const groupAttrTable = transfer(groupAttrParams)
const addonAttrTable = transfer(addonAttrParams)
const buttonAttrTable = transfer(buttonAttrParams)

const InputGroupExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper
        title='InputGroup'
        desc='input前后搭配addon元素，也包括button组件等'
      >
        <Card component={Button} />
        <Card component={Size} />
        <Card component={Addon} />
        <MarkdownPreview markdown={groupAttrTable} name='InputGroup API' />
        <MarkdownPreview
          markdown={addonAttrTable}
          name='InputGroup.Addon API'
        />
        <MarkdownPreview
          markdown={buttonAttrTable}
          name='InputGroup.Button API'
        />
      </Wrapper>
    </div>
  )
}

InputGroupExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default InputGroupExample
