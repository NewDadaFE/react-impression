import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import NavbarBrand from './NavbarBrand'
import NavbarButton from './NavbarButton'

// props校验
const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  theme: PropTypes.string,
}

/**
 * Navbar 组件
 */
const Navbar = ({ theme, className, children, ...others }) => {
  let themeClass = theme ? `navbar-${theme}` : undefined

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
