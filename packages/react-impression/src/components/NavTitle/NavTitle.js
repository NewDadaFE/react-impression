import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const NavTitle = ({ children, className, ...others }) => {
  return (
    <div {...others} className={classnames('nav-title', className)}>
      {children}
    </div>
  )
}

NavTitle.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.any,
  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

export default NavTitle
