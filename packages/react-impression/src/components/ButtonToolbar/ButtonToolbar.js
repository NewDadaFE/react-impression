import React, { useEffect } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const ButtonToolbar = ({ className, children }) => {
  useEffect(() => {
    console.warn('ReactImpression: ButtonToolbar 组件即将废弃！')
  }, [])

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
