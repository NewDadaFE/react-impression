/* sourceCode:start */
import React from 'react'
import { Icon, Breadcrumb } from 'react-impression'

const Arrow = () => {
  return (
    <div>
      <Breadcrumb className='no-padding' separator='arrow'>
        <a href='javascript:void(0);'>
          <Icon type='home' left />Home
        </a>
        <a href='javascript:void(0);'>
          <Icon type='user' left />User Center
        </a>
        <span>
          <Icon type='cog' left />Basic Information
        </span>
      </Breadcrumb>
    </div>
  )
}

/* sourceCode:end */

Arrow.title = '箭头分割'
Arrow.desc = `> 分割标识符为箭头`

export default Arrow
