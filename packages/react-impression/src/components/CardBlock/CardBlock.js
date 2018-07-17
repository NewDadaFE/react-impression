import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const CardBlock = ({ className, children, ...others }) => {
  return (
    <div {...others} className={classnames('card-block', className)}>
      {children}
    </div>
  )
}

CardBlock.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.any,

  /**
   * 自定义样式
   */
  className: PropTypes.string,
}

export default CardBlock
