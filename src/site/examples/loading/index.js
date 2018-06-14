import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Type from './Type'
import Full from './FullScreen'
import ShowHide from './ShowHide'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const loadingAttr = [
  ['loading', '是否显示', 'boolean', 'false'],
  ['full', '是否全屏', 'boolean', 'false'],
  ['className', '自定义样式', 'string', ''],
  [
    'type',
    '类型，可选值为 fountain, wave, pendule, cyclone',
    'string',
    'cyclone',
  ],
  ['loadingMsg', '加载文本', 'string', '加载中'],
  ['closeable', '是否可关闭', 'boolean', 'false'],
  ['duration', '停留时间', 'number', ''],
]

const loadingAttrTable = transfer(loadingAttr)

const LoadingExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper title='Loading 加载' desc='加载数据时显示动效'>
        <Card component={Type} />
        <Card component={ShowHide} />
        <Card component={Full} />
        <MarkdownPreview markdown={loadingAttrTable} name='Loading API' />
      </Wrapper>
    </div>
  )
}

LoadingExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default LoadingExample
