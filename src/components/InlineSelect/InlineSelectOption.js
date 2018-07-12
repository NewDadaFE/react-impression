import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
/**
 * InlineSelectOption组件.
 */
const InlineSelectOption = ({ active, className, children, ...others }) => {
  return (
    <div
      {...others}
      className={classnames('inline-select-option', { active }, className)}
    >
      {children}
    </div>
  )
}

InlineSelectOption.propTypes = {
  // 是否选中
  active: PropTypes.bool,
  // 自定义样式
  className: PropTypes.string,
  children: PropTypes.any,
}

export default InlineSelectOption
