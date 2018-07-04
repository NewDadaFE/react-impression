import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * FormGroup 组件.
 */
const FormItem = ({ col, className, children, ...others }) => {
  let colClass = col ? `col-${col}` : null

  return (
    <div {...others} className={classnames('form-item', colClass, className)}>
      {children}
    </div>
  )
}

FormItem.propTypes = {
  // 所占比例
  col: PropTypes.number,
  // 自定义样式
  className: PropTypes.string,
  children: PropTypes.any,
}

export default FormItem
