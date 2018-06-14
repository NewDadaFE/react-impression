import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Direction from './Direction'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const tooltipAttrParams = [
  [
    'position',
    '设置提示工具位置，可选值为 left、right、top、bottom',
    'string',
    'right',
  ],
  ['content', '提示工具内容', 'string', '-'],
  ['children', '子节点', 'element', '-'],
]

const tooltipAttrTable = transfer(tooltipAttrParams)

const TooltipExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Tooltip文字提示' desc='简单的文字提示气泡框'>
        <Card component={Direction} />
        <MarkdownPreview markdown={tooltipAttrTable} name='Tooltip API' />
      </Wrapper>
    </div>
  )
}

TooltipExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default TooltipExample
