import React from 'react'
import Card from '@/site/components/Card'
import Grid from './Grid'
import Offset from './Offset'
import Responsive from './Responsive'
import Gutter from './Gutter'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const GridAttr = [
  ['col', '所占比例', 'number、string', '-'],
  ['offset', '栅格左侧的间隔格数，间隔内不可以有栅格', 'number、string', '-'],
  ['push', '栅格向左偏移格数', 'number、string', '-'],
  ['pull', '栅格向右偏移格数', 'number、string', '-'],
  ['xs', '<544px 响应式栅格', 'number、string', '-'],
  ['sm', '<768px 响应式栅格', 'number、string', '-'],
  ['md', '<992px 响应式栅格', 'number、string', '-'],
  ['lg', '<1200px 响应式栅格', 'number、string', '-'],
  ['xl', '>=1200px 响应式栅格', 'number、string', '-'],
]

const GridAttrTable = transfer(GridAttr)

export default ({ routes, params }) => {
  return [
    <Breadcrumb routes={routes} params={params} />,
    <Wrapper title='Grid栅格' desc='12栅格系统。'>
      <Card component={Grid} />
      <Card component={Gutter} />
      <Card component={Offset} />
      <Card component={Responsive} />
      <MarkdownPreview markdown={GridAttrTable} name='Col API' />
    </Wrapper>,
  ]
}
