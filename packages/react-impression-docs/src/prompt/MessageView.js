import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Button, Message, Icon } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

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

const MessageView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h5>Example</h5>
        <Card>
          <Card.Block>
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
                <Button
                  theme='secondary'
                  outline
                  onClick={showWarningMessageHandle}
                >
                  警告
                </Button>
              </Col>
              <Col>
                <Button theme='default' onClick={showErrorMessageHandle}>
                  <span className='text-danger'>错误</span>
                </Button>
              </Col>
              <Col>
                <Button
                  theme='primary'
                  outline
                  onClick={showLoadingMessageHandle}
                >
                  <Icon type='spinner' left />Loading
                </Button>
              </Col>
            </Row>
          </Card.Block>
          <Highlight>
            {'import { Message } from "impression-react";\n\n'}
            {'Message.info("你好，这是一条info消息！");\n'}
            {'Message.success("你好，这是一条success消息！");\n'}
            {'Message.warning("你好，这是一条warning消息！");\n'}
            {'Message.error("你好，这是一条error消息！");\n'}
            {'Message.loading("正在执行中...", 0);'}
          </Highlight>
        </Card>
        <Message />
        <h5>API</h5>
        <ul>
          <li>
            <code>Message.info(message, duration)</code>
          </li>
          <li>
            <code>Message.success(message, duration)</code>
          </li>
          <li>
            <code>Message.warning(message, duration)</code>
          </li>
          <li>
            <code>Message.error(message, duration)</code>
          </li>
          <li>
            <code>Message.loading(message)</code>
          </li>
          <li>
            <code>Message.hideMessage()</code>
          </li>
        </ul>
        <CommenTable
          data={[
            ['message', '提示内容', 'string', ''],
            ['duration', '停留时间（ms）', 'number', '2000'],
          ]}
        />
      </Card>
    </div>
  )
}

MessageView.propTypes = {
  routes: PropTypes.array,
}

export default MessageView
