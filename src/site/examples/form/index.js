import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Inline from './Inline'
import Horizontal from './Vertical'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const formAttr = [
  ['type', '排列方向，可选值为 inline、horizontal', 'string', 'inline'],
  ['className', '自定义样式', 'string', ''],
]

const formAttrTable = transfer(formAttr)

const formExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper
        title='Form表单'
        desc='具有数据收集和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素'
      >
        <Card component={Inline} />
        <Card component={Horizontal} />
        <MarkdownPreview markdown={formAttrTable} name='Form API' />
      </Wrapper>
    </div>
  )
}

formExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default formExample
