import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const NavbarButton = ({ className, children, ...others }) => {
  return (
    <Button {...others} className={classnames('navbar-btn', className)}>
      {children}
    </Button>
  )
}

NavbarButton.propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,
  /**
   * 子组件
   */
  children: PropTypes.any,
}

export default NavbarButton
