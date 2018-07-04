import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Grid from './Grid'
import Offset from './Offset'
import Responsive from './Responsive'
import Gutter from './Gutter'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const ColAttr = [
  ['col', '所占比例', 'number', '-'],
  ['offset', '栅格左侧的间隔格数，间隔内不可以有栅格', 'number', '-'],
  ['push', '栅格向左偏移格数', 'number', '-'],
  ['pull', '栅格向右偏移格数', 'number', '-'],
  ['xs', '<544px 响应式栅格', 'number', '-'],
  ['sm', '<768px 响应式栅格', 'number', '-'],
  ['md', '<992px 响应式栅格', 'number', '-'],
  ['lg', '<1200px 响应式栅格', 'number', '-'],
  ['xl', '>=1200px 响应式栅格', 'number', '-'],
]

const RowAttr = [['gutter', '栅格间隔', 'number', '0']]

const ColAttrTable = transfer(ColAttr)
const RowAttrTable = transfer(RowAttr)

const LayoutExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Grid栅格' desc='12栅格系统。'>
        <Card component={Grid} />
        <Card component={Gutter} />
        <Card component={Offset} />
        <Card component={Responsive} />
        <MarkdownPreview markdown={RowAttrTable} name='Row API' />
        <MarkdownPreview markdown={ColAttrTable} name='Col API' />
      </Wrapper>
    </div>
  )
}

LayoutExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default LayoutExample
