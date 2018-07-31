import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  /**
   * logo
   */
  img: PropTypes.string,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.node,
}

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
