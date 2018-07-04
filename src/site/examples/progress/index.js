import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Theme from './Theme'
import Striped from './Striped'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const progressAttrParams = [
  ['theme', '设置进度条样式，可选值为 success、warning、danger', 'string', ''],
  ['striped', '是否为斑马线样式', 'boolean', 'false'],
  ['value', '进度值,不填默认为0', 'number', ''],
  ['strokeWidth', '进度条宽度', 'number', '12px'],
  ['showInfo', '进度条信息显示', 'boolean', 'true'],
  [
    'formatter',
    '进度条信息显示格式',
    'function',
    '(percentNumber => percentNumber + %)',
  ],
]

const progressAttrTable = transfer(progressAttrParams)

const PopoverExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Progress进度条' desc='展示操作的当前进度'>
        <Card component={Theme} />
        <Card component={Striped} />
        <MarkdownPreview markdown={progressAttrTable} name='Progress API' />
      </Wrapper>
    </div>
  )
}

PopoverExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default PopoverExample
