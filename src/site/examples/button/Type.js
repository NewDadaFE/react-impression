/* sourceCode:start */
import React from 'react'
import { Button } from 'react-impression'

const ButtonType = () => {
  return (
    <div>
      <Button type='default'>default</Button>
      <Button type='primary'>primary</Button>
      <Button type='danger'>danger</Button>
    </div>
  )
}
/* sourceCode:end */

ButtonType.title = '按钮类型'
ButtonType.desc = `
> 按钮有三种类型：默认按钮、主按钮、危险按钮。
主按钮在同一个操作区域最多出现一次。
`

export default ButtonType
