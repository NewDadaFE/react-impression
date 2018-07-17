import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

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
  /**
   * 是否选择
   */
  active: PropTypes.bool,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.any,
}

export default InlineSelectOption
