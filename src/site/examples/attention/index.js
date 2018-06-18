import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Type from './Type'
import Link from './Link'
import Close from './Close'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const attentionAttr = [
  [
    'theme',
    '设置警告提示样式，可选值为 success、primary、warning、danger',
    'string',
    '',
  ],
  ['closeable', '设置是否显示关闭按钮', 'boolean', ''],
  ['className', '自定义样式', 'string', ''],
]

const linkAttr = [
  ['href', '设置链接地址', 'string', ''],
  ['className', '自定义样式', 'string', ''],
]

const attentionAttrTable = transfer(attentionAttr)
const linkAttrTable = transfer(linkAttr)

const attentionExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Attention' desc='注意提示，展现需要关注的信息。'>
        <Card component={Type} />
        <Card component={Link} />
        <Card component={Close} />
        <MarkdownPreview markdown={attentionAttrTable} name='Attention API' />
        <MarkdownPreview markdown={linkAttrTable} name='Attention.Link API' />
      </Wrapper>
    </div>
  )
}

attentionExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default attentionExample
