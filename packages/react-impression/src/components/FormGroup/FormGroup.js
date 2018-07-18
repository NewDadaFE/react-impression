import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const FormGroup = ({ col, className, children, ...others }) => {
  let colClass = col ? `col-xs-${col}` : null

  return (
    <div {...others} className={classnames('form-group', colClass, className)}>
      {children}
    </div>
  )
}

FormGroup.propTypes = {
  /**
   * 所占比例
   */
  col: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.any,
}

export default FormGroup
