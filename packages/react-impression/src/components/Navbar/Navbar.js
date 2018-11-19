import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Navbar = ({ className, children }) => (
  <div className={classNames('navbar', className)}>{children}</div>
)

Navbar.propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.node.isRequired,
}

export default Navbar
