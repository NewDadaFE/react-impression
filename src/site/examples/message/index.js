import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Type from './Type'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const MessageAttrParams = [
  ['message', '提示内容', 'string', '-'],
  ['duration', '停留时间（ms）', 'number', '2000'],
]

const apiParams = [
  ['Message.info(message, duration)', '消息类信息'],
  ['Message.success(message, duration)', '成功类信息'],
  ['Message.warning(message, duration)', '警告类信息'],
  ['Message.error(message, duration)', '错误类信息'],
  ['Message.loading(message)', '加载状态'],
  ['Message.hideMessage()', '关闭消息提示'],
]

const MessageAttrTable = transfer(MessageAttrParams)
const apiTable = transfer(apiParams)

const MessageExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper
        title='Message全局提示'
        desc='全局展示操作反馈信息，可提供成功、警告和错误等反馈信息'
      >
        <Card component={Type} />
        <MarkdownPreview markdown={MessageAttrTable} name='Message API' />
        <MarkdownPreview markdown={apiTable} name='方法' />
      </Wrapper>
    </div>
  )
}

MessageExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default MessageExample
