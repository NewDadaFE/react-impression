import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
// props校验
const propTypes = {
  img: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
}

/**
 * Sidebar 顶部组件
 */
const SidebarHeader = ({ img, className, children, ...others }) => {
  return (
    <div {...others} className={classnames('sidebar-header', className)}>
      {img && <img src={img} />}
      {children}
    </div>
  )
}

SidebarHeader.propTypes = propTypes
export default SidebarHeader
