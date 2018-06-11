import React from 'react'
import Card from '@/site/components/Card'
import Grid from './Grid'
import Offset from './Offset'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const GridAttr = [
  ['col', '所占比例', 'number、string', '-'],
  ['offset', '栅格左侧的间隔格数，间隔内不可以有栅格', 'number、string', '-'],
  ['push', '栅格向左偏移格数', 'number、string', '-'],
  ['pull', '栅格向右偏移格数', 'number、string', '-'],
]

const GridAttrTable = transfer(GridAttr)

export default ({ routes, params }) => {
  return [
    <Breadcrumb routes={routes} params={params} />,
    <Wrapper title='Grid栅格' desc='12栅格系统。'>
      <Card component={Grid} />
      <Card component={Offset} />
      <MarkdownPreview markdown={GridAttrTable} name='Col API' />
    </Wrapper>,
  ]
}
