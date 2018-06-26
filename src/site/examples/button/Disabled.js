/* sourceCode:start */
import React from 'react'
import { Button } from 'react-impression'
import './index.scss'

const ButtonDisabled = () => {
  return (
    <div>
      <Button type='primary'>default</Button>
      <Button type='primary' disabled>
        default
      </Button>
      <Button type='primary' ghost>
        primary
      </Button>
      <Button type='primary' ghost disabled>
        primary
      </Button>
    </div>
  )
}
/* sourceCode:end */

ButtonDisabled.title = '不可用状态'
ButtonDisabled.desc = `> 添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变`

export default ButtonDisabled
