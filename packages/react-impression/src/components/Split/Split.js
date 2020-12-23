import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Split = ({ children, className }) => {
  return (
    <span className={classNames('split', className)}>{children || '|'}</span>
  )
}

Split.propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,
  /**
   * 子组件
   */
  children: PropTypes.node,
}

export default Split
