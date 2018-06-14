import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Type from './Type'
import Placement from './Placement'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const NotificationAttrParams = [
  ['title', '提示内容标题', 'string', '通知'],
  ['message', '提示内容', 'string', '-'],
  ['closeable', '是否显示关闭按钮', 'boolean', 'true'],
]

const apiParams = [
  ['Notification.info(title, message, closeable)', '消息类提醒'],
  ['Notification.success(title, message, closeable)', '成功类提醒'],
  ['Notification.warning(title, message, closeable)', '警告类提醒'],
  ['Notification.error(title, message, closeable)', '错误类提醒'],
  [
    'Notification.config(options)',
    '全局配置方法，在调用前提前配置。可配置duration, place, bottom, top, getContainer',
  ],
]

const configParams = [
  ['duration', '默认自动关闭延时', 'number', '2000'],
  [
    'top/bottom',
    '消息从顶部/底部弹出时，距离顶部/底部的位置px',
    'number',
    '20',
  ],
  [
    'place',
    '弹出位置，可选 topLeft topRight bottomLeft bottomRight',
    'string',
    'topRight',
  ],
  ['getContainer', '渲染节点的dom位置', '() =>HTMLNode', '() => document.body'],
]

const NotificationAttrTable = transfer(NotificationAttrParams)
const apiTable = transfer(apiParams)
const configTable = transfer(configParams)

const NotificationExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper
        title='Notification通知提醒框'
        desc='全局展示通知提醒信息。经常用于较为复杂的通知内容或者带有交互的通知或者系统主动推送'
      >
        <Card component={Type} />
        <Card component={Placement} />
        <MarkdownPreview
          markdown={NotificationAttrTable}
          name='Notification API'
        />
        <MarkdownPreview markdown={apiTable} name='方法' />
        <MarkdownPreview
          markdown={configTable}
          name='Notification.config API'
        />
      </Wrapper>
    </div>
  )
}

NotificationExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default NotificationExample
