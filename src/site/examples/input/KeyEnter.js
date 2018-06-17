/* sourceCode:start */
import React from 'react'
import { Input } from 'react-impression'

const KeyEnter = () => {
  const KeyEnterHandle = e => {
    console.log(e)
  }

  return (
    <div>
      <Input
        style={{ width: '200px' }}
        placeholder='placeholder'
        onKeyEnter={KeyEnterHandle}
      />
    </div>
  )
}
/* sourceCode:end */

KeyEnter.title = '支持绑定enter键触发函数'
KeyEnter.desc = `> 添加onKeyEnter参数`

export default KeyEnter
