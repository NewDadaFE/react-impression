import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const ButtonToolbar = ({ className, children }) => {
  return <div className={classnames('btn-toolbar', className)}>{children}</div>
}

ButtonToolbar.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.node,

  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

export default ButtonToolbar
