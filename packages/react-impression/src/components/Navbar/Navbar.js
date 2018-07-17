import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import NavbarBrand from '../NavbarBrand'
import NavbarButton from '../NavbarButton'

const propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,
  /**
   * 子组件
   */
  children: PropTypes.any,
  /**
   * 导航条样式
   */
  theme: PropTypes.oneOf(['primary', 'inverse', 'pure']),
}

/**
 * Navbar 组件
 */
const Navbar = ({ theme, className, children, ...others }) => {
  const themeClass = theme ? `navbar-${theme}` : undefined

  return (
    <nav {...others} className={classnames('navbar', themeClass, className)}>
      {children}
    </nav>
  )
}

Navbar.propTypes = propTypes
Navbar.Brand = NavbarBrand
Navbar.Button = NavbarButton

export default Navbar
