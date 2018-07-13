import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import InputGroupAddon from '../InputGroupAddon'
import InputGroupInput from '../InputGroupInput'
import InputGroupButton from '../InputGroupButton'

/**
 * InputGroup组件.
 */
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
  size: PropTypes.oneOf(['sm', 'lg']),
  className: PropTypes.string,
  children: PropTypes.any,
}
InputGroup.Addon = InputGroupAddon
InputGroup.Input = InputGroupInput
InputGroup.Button = InputGroupButton

export default InputGroup
