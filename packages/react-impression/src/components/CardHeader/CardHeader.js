import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const CardHeader = ({ className, children, align, ...others }) => {
  const alignClass = align ? `text-${align}` : null
  return (
    <div
      {...others}
      className={classnames('card-header', alignClass, className)}
    >
      {children}
    </div>
  )
}

CardHeader.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.node,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 标题位置
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),
}

export default CardHeader
