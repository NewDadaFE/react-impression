/* sourceCode:start */
import React from 'react'
import { Attention } from 'react-impression'

const Close = () => {
  return (
    <Attention closeable theme='primary'>
      you can close this attention
    </Attention>
  )
}
/* sourceCode:end */

Close.title = '可关闭'
Close.desc = `> 组件中closeable设置为true`

export default Close
