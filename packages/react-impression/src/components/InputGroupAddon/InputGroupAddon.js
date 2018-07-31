import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const InputGroupAddon = ({ pure, className, children, ...others }) => {
  let pureClass = pure ? 'bg-pure' : null

  return (
    <span
      {...others}
      className={classnames('input-group-addon', pureClass, className)}
    >
      {children}
    </span>
  )
}

InputGroupAddon.propTypes = {
  /**
   * 显示成文字
   */
  pure: PropTypes.bool,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.node,
}

export default InputGroupAddon
