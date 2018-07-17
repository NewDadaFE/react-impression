import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

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
  /**
   * 点击跳转的链接
   */
  href: PropTypes.string,
  /**
   * 自定义样式
   */
  className: PropTypes.string,
  /**
   * 子组件
   */
  children: PropTypes.any,
}

export default NavbarBrand
