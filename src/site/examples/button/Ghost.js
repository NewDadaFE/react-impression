/* sourceCode:start */
import React from 'react'
import { Button } from 'react-impression'

const ButtonGhost = () => {
  return (
    <div>
      <Button type='default' outline>
        default
      </Button>
      <Button type='primary' outline>
        primary
      </Button>
      <Button type='secondary' outline>
        secondary
      </Button>
    </div>
  )
}
/* sourceCode:end */

ButtonGhost.title = 'outline按钮'
ButtonGhost.desc = `
> 三种类型的无背景色按钮。
`

export default ButtonGhost
