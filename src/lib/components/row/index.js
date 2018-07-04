import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * Row组件.
 */
export default class Row extends PureComponent {
  // props校验
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    gutter: PropTypes.number,
    style: PropTypes.object,
  }
  /**
   * 自动计算col属性.
   * @return {[Array]} [子元素]
   */
  getChildren(gutterNum) {
    let { children } = this.props,
      count = 0,
      allocation = 0

    React.Children.forEach(children, child => {
      if (!child) {
        return
      }

      if (child.props.hasOwnProperty('col')) {
        count += Number.parseInt(child.props.col, 10)
      } else {
        allocation += 1 // 校验
      }
    })

    let surplus = 12 - count

    return React.Children.map(children, (child, index) => {
      if (!child) {
        return child
      }

      let { col } = child.props
      let computedProps = {
        key: index,
        col: col || Number.parseInt(surplus / allocation, 10),
      }
      if (child.props && gutterNum > 0) {
        computedProps.style = {
          paddingLeft: gutterNum / 2,
          paddingRight: gutterNum / 2,
          ...child.props.style,
        }
      }

      return React.cloneElement(child, computedProps)
    })
  }
  // 渲染
  render() {
    let { className, children, gutter, style, ...others } = this.props
    const gutterNum = Number(gutter)
    const rowStyle =
      gutterNum > 0
        ? {
          marginLeft: gutterNum / -2,
          marginRight: gutterNum / -2,
          ...style,
        }
        : style

    const otherProps = { ...others }
    delete otherProps.gutter

    children = this.getChildren(gutterNum)
    return (
      <div
        {...otherProps}
        className={classnames('row', className)}
        style={rowStyle}
      >
        {children}
      </div>
    )
  }
}
