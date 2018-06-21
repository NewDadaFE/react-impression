import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Basic from './Basic'
import JumpSearch from './JumpSearch'
import FromProps from './ActiveFromProps'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const pageAttrParams = [
  ['scope', '设置前后延伸几页', 'number', '2'],
  ['activePage', '当前在第几页', 'number', '-'],
  ['defaultActivePage', '默认当前在第几页', 'number', '1'],
  ['pageSize', '每页显示数据数量', 'number', '-'],
  ['defaultPageSize', '默认每页显示数据数量', 'number', '10'],
  ['totalCount', '数据总数量', 'number', '0'],
  ['onSelect', '选中回调函数', 'function', ''],
  ['className', '自定义样式', 'string', ''],
  ['jumpPage', '是否显示快速跳转输入框', 'boolean', 'false'],
]

const pageAttrTable = transfer(pageAttrParams)

const PaginationExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper
        title='Pagination分页'
        desc='分页页数展示组件，用于每次点击某一页加载对应页数数据'
      >
        <Card component={Basic} />
        <Card component={JumpSearch} />
        <Card component={FromProps} />
        <MarkdownPreview markdown={pageAttrTable} name='Pagination API' />
      </Wrapper>
    </div>
  )
}

PaginationExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default PaginationExample
