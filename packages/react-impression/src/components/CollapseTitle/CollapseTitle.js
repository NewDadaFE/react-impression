import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const CollapseTitle = ({ onClick, children, className, ...others }) => {
  return (
    <div
      onClick={onClick}
      {...others}
      className={classnames('collapse-title', className)}
    >
      {children}
      <i className='fa fa-angle-down collapse-title-addon' />
    </div>
  )
}

CollapseTitle.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.node,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 点击回调函数
   */
  onClick: PropTypes.func,
}

export default CollapseTitle
