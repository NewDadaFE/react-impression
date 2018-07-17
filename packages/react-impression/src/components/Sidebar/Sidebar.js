import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../SidebarFooter'
import Header from '../SidebarHeader'
import Body from '../SidebarBody'

const propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.any,
}

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
