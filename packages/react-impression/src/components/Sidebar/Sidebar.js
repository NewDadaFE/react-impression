import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Header from './SidebarHeader'
import Body from './SidebarBody'
import Footer from './SidebarFooter'

// props校验
const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}

/**
 * Sidebar 组件
 */
const Sidebar = ({ children, className, ...others }) => {
  return (
    <div {...others} className={classnames('sidebar', className)}>
      {children}
    </div>
  )
}

Sidebar.propTypes = propTypes
Sidebar.Header = Header
Sidebar.Body = Body
Sidebar.Footer = Footer

export default Sidebar
