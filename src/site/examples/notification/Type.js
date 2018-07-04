/* sourceCode:start */
import React from 'react'
import { Row, Col, Button, Notification } from 'react-impression'

// 添加一条
const addInfoNotice = () => {
  Notification.info({
    closeable: false,
    title: '通知',
    message: '欢迎，这是一个Info通知。',
  })
}
const addSuccessNotice = () => {
  Notification.success({
    title: '成功',
    message: '恭喜您，操作成功！',
  })
}
const addWarningNotice = () => {
  Notification.warning({
    title: '警告',
    message: '请注意，前方有狗熊！',
  })
}
const addErrorNotice = () => {
  Notification.error({
    title: '错误',
    message: '很遗憾，您的小四轮爆胎了！',
  })
}

const NotificationType = () => {
  return (
    <div>
      <Row>
        <Col>
          <Button theme='primary' onClick={addInfoNotice}>
            <span>信息</span>
          </Button>
        </Col>
        <Col>
          <Button theme='default' onClick={addSuccessNotice}>
            <span className='text-success'>成功</span>
          </Button>
        </Col>
        <Col>
          <Button theme='secondary' onClick={addWarningNotice}>
            警告
          </Button>
        </Col>
        <Col>
          <Button theme='default' onClick={addErrorNotice}>
            <span className='text-danger'>错误</span>
          </Button>
        </Col>
      </Row>
      <Notification />
    </div>
  )
}
/* sourceCode:end */

NotificationType.title = '几种基本的提示类型'
NotificationType.desc = `> 包括成功、失败、警告、提示等`

export default NotificationType
