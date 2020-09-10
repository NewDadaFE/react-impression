import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import InputGroupAddon from '../InputGroupAddon'
import InputGroupInput from '../InputGroupInput'
import InputGroupButton from '../InputGroupButton'

const InputGroup = ({ size, className, children, ...others }) => {
  let sizeClass = size ? `input-group-${size}` : null

  return (
    <div
      {...others}
      className={classnames('input-group', sizeClass, className)}
    >
      {children}
    </div>
  )
}

InputGroup.propTypes = {
  /**
   * 设置输入框组大小
   */
  size: PropTypes.oneOf(['xs', 'sm', 'lg']),

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.node,
}
InputGroup.Addon = InputGroupAddon
InputGroup.Input = InputGroupInput
InputGroup.Button = InputGroupButton

export default InputGroup
