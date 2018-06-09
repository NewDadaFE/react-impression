import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Footer from './SidebarFooter'
import Header from './SidebarHeader'
import Body from './SidebarBody'

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

// props校验

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}

Sidebar.Header = Header
Sidebar.Body = Body
Sidebar.Footer = Footer

export default Sidebar
