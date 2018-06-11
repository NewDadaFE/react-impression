/* sourceCode:start */
import React from 'react'
import { Breadcrumb } from 'react-impression'

const Basic = () => {
  return (
    <div>
      <Breadcrumb className='no-padding'>
        <a href='javascript:void(0);'>Home</a>
        <a href='javascript:void(0);'>User Center</a>
        <span>Basic Information</span>
      </Breadcrumb>
    </div>
  )
}

/* sourceCode:end */

Basic.title = '基本用法'
Basic.desc = `> 默认面包屑, 也可以和react-router结合传入routes参数，此时不必添加子节点`

export default Basic
