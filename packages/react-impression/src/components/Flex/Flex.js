import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FlexItem from '../FlexItem'

/**
 * Flex布局组件.
 */
export default class Flex extends PureComponent {
  // prop type校验
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    children: PropTypes.any,

    /**
     * 对齐方式
     */
    align: PropTypes.oneOf(['top', 'middle', 'bottom']),

    /**
     * 方向
     */
    direction: PropTypes.oneOf(['row', 'column']),
  }
  // 默认props
  static defaultProps = {
    direction: 'row',
  }
  // 渲染
  render() {
    let { direction, align, children, className, ...others } = this.props,
      directionClass = direction === 'row' ? '' : 'flex-vertical',
      alignClass = align ? `flex-items-${align}` : null

    return (
      <div
        {...others}
        className={classnames('flex', directionClass, alignClass, className)}
      >
        {children}
      </div>
    )
  }
}

Flex.Item = FlexItem
