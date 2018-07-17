import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const FormControlLabel = ({ children, className, ...others }) => {
  return (
    <label {...others} className={classnames('form-control-label', className)}>
      {children}
    </label>
  )
}

FormControlLabel.propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.any,
}

export default FormControlLabel
