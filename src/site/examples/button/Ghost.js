/* sourceCode:start */
import React from 'react'
import { Button } from 'react-impression'

const ButtonGhost = () => {
  return (
    <div>
      <Button type='default' ghost>
        default
      </Button>
      <Button type='primary' ghost>
        primary
      </Button>
      <Button type='success' ghost>
        success
      </Button>
      <Button type='warning' ghost>
        warning
      </Button>
      <Button type='danger' ghost>
        danger
      </Button>
    </div>
  )
}
/* sourceCode:end */

ButtonGhost.title = '幽灵按钮'
ButtonGhost.desc = `
> 按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。
`

export default ButtonGhost
