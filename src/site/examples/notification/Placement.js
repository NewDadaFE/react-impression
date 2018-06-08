/* sourceCode:start */
import React from 'react'
import { Button, Notification, Radio } from 'react-impression'
import styles from './index.scss'

const RadioGroup = Radio.Group

// 添加一条
const addNotice = () => {
  Notification.info({
    title: '通知',
    message: '欢迎，这是一个Info通知。',
  })
}

class NotificationPlacement extends React.Component {
  onChange = value => {
    Notification.config({
      place: value,
    })
  }

  render() {
    return (
      <div>
        <RadioGroup onChange={this.onChange}>
          <Radio value='topLeft'>左上</Radio>
          <Radio value='bottomLeft'>左下</Radio>
          <Radio value='topRight'>右上</Radio>
          <Radio value='bottomRight'>右下</Radio>
        </RadioGroup>
        <Button
          theme='primary'
          onClick={addNotice}
          className={styles['margin-left']}
        >
          <span>打开消息提示</span>
        </Button>
        <Notification />
      </div>
    )
  }
}
/* sourceCode:end */

NotificationPlacement.title = '位置'
NotificationPlacement.desc = `> 可以设置通知从右上角、右下角、左下角、左上角弹出。`

export default NotificationPlacement
