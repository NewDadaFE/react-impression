/* sourceCode:start */
import React from 'react'
import { Row, Col, Button, Message, Icon } from 'react-impression'

const showInfoMessageHandle = () => {
  Message.info('你好，这是一条info消息！')
}
const showSuccessMessageHandle = () => {
  Message.success('你好，这是一条success消息！')
}
const showWarningMessageHandle = () => {
  Message.warning('你好，这是一条warning消息！')
}
const showErrorMessageHandle = () => {
  Message.error('你好，这是一条error消息！')
}
const showLoadingMessageHandle = () => {
  Message.loading('正在执行中...', 0)

  // 5秒后关闭
  setTimeout(() => {
    Message.hideMessage()
  }, 5000)
}

const MessageType = () => {
  return (
    <div>
      <Row>
        <Col>
          <Button theme='primary' outline onClick={showInfoMessageHandle}>
            信息
          </Button>
        </Col>
        <Col>
          <Button theme='default' onClick={showSuccessMessageHandle}>
            <span className='text-success'>成功</span>
          </Button>
        </Col>
        <Col>
          <Button theme='secondary' outline onClick={showWarningMessageHandle}>
            警告
          </Button>
        </Col>
        <Col>
          <Button theme='default' onClick={showErrorMessageHandle}>
            <span className='text-danger'>错误</span>
          </Button>
        </Col>
        <Col>
          <Button theme='primary' outline onClick={showLoadingMessageHandle}>
            <Icon type='spinner' left />Loading
          </Button>
        </Col>
      </Row>
      <Message />
    </div>
  )
}
/* sourceCode:end */

MessageType.title = '几种基本的提示类型'
MessageType.desc = `> 包括成功、失败、警告、提示等`

export default MessageType
