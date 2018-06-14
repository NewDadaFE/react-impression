import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Basic from './Basic'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const switchAttrParams = [
  ['defaultChecked', '是否默认选中', 'boolean', ''],
  ['disabled', '是否可以点击', 'boolean', ''],
  ['onChange', '状态变更回调函数', 'function', ''],
  ['className', '自定义样式', 'string', ''],
]

const switchAttrTable = transfer(switchAttrParams)

const SwitchExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Switch 开关' desc='表示两种相互对立的状态间的切换'>
        <Card component={Basic} />
        <MarkdownPreview markdown={switchAttrTable} name='Switch API' />
      </Wrapper>
    </div>
  )
}

SwitchExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default SwitchExample
