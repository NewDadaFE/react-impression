/* sourceCode:start */
import React from 'react'
import { Button } from 'react-impression'

const ButtonSize = () => {
  return (
    <div>
      <Button type='primary' size='sm'>
        sm
      </Button>
      <Button type='primary' size='md'>
        md
      </Button>
      <Button type='primary' size='lg'>
        large
      </Button>
    </div>
  )
}
/* sourceCode:end */

ButtonSize.title = '按钮尺寸'
ButtonSize.desc = `
> 按钮有大、中、小三种尺寸。
通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
`

export default ButtonSize
