import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Basic from './Basic'
import Arrow from './Arrow'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const breadcrumbAttr = [
  ['separator', '设置分隔符，可选值为 arrow', 'string', ''],
  ['className', '自定义样式', 'string', ''],
]

const breadcrumbAttrTable = transfer(breadcrumbAttr)

const breadExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper
        title='Breadcrumb面包屑'
        desc='显示当前页面路径层级，可以点击返回上层。'
      >
        <Card component={Basic} />
        <Card component={Arrow} />
        <MarkdownPreview markdown={breadcrumbAttrTable} name='Breadcrumb API' />
      </Wrapper>
    </div>
  )
}

breadExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default breadExample
