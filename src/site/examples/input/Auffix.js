/* sourceCode:start */
import React from 'react'
import { Input, Icon } from 'react-impression'

const Auffix = () => {
  const searchHandle = () => {}

  const prefix = <Icon type='address-book' />
  const suffixIcon = <Icon type='search' onClick={searchHandle} />

  return (
    <div>
      <Input
        style={{ width: '200px' }}
        placeholder='search icon'
        suffix={suffixIcon}
        prefix={prefix}
      />
    </div>
  )
}
/* sourceCode:end */

Auffix.title = 'input前后可添加icon等元素'
Auffix.desc = `> 带有图标标记输入类型`

export default Auffix
