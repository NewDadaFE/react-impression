import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import FlexItem from '../FlexItem'

const Flex = props => {
  const { direction, align, justify, className, children, ...others } = props

  return (
    <div
      {...others}
      className={classNames(className, 'flex', {
        'flex-vertical': direction === 'column',
        [`flex-items-${align}`]: !!align,
        [`flex-justify-${justify}`]: !!justify,
      })}
    >
      {children}
    </div>
  )
}

Flex.propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.node,

  /**
   * 水平对齐方式
   */
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),

  /**
   * 方向
   */
  direction: PropTypes.oneOf(['row', 'column']),
  /**
   * 两端对齐方式
   */
  justify: PropTypes.oneOf(['left', 'center', 'right', 'around', 'between']),
}

Flex.defaultProps = {
  direction: 'row',
}

Flex.Item = FlexItem

export default Flex
