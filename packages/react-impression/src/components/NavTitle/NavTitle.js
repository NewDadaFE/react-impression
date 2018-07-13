import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

/**
 * NavTitle 组件
 */
const NavTitle = ({ children, className, ...others }) => {
  return (
    <div {...others} className={classnames('nav-title', className)}>
      {children}
    </div>
  )
}

NavTitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default NavTitle
