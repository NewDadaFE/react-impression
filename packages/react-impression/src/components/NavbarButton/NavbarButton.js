import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const NavbarButton = ({ children }) => (
  <button className='navbar-btn'>{children}</button>
)

NavbarButton.propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.node,
}

export default NavbarButton
