import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const CollapseBody = ({ className, children, ...others }) => {
  delete others.onClick

  return (
    <div {...others} className={classnames('collapse-body', className)}>
      {children}
    </div>
  )
}

CollapseBody.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.node,

  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

export default CollapseBody
