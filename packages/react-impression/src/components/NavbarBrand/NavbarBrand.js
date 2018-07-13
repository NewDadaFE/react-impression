import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * NavbarBrand 组件
 */
const NavbarBrand = ({ href, className, children, ...others }) => {
  return (
    <a
      {...others}
      className={classnames('navbar-brand', className)}
      href={href || '#'}
    >
      {children}
    </a>
  )
}

NavbarBrand.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
}

export default NavbarBrand
