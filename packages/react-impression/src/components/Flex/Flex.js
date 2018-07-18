import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import FlexItem from '../FlexItem'

export default class Flex extends React.PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
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
    const { direction, align, className, ...others } = this.props
    let { children } = this.props
    const directionClass = direction === 'row' ? '' : 'flex-vertical'
    const alignClass = align ? `flex-items-${align}` : null

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
