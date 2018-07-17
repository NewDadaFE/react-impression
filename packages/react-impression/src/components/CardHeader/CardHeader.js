import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const CardHeader = ({ className, children, ...others }) => {
  return (
    <div {...others} className={classnames('card-header', className)}>
      {children}
    </div>
  )
}

CardHeader.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.any,

  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

export default CardHeader
