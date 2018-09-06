import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ children }) => {
  return <div className='navbar'>{children}</div>
}

Navbar.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.node.isRequired,
}

export default Navbar
