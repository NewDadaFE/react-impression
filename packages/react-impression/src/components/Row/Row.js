import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Row extends React.PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.any,
  }

  getChildren() {
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
        allocation += 1
      }
    })

    let surplus = 12 - count

    return React.Children.map(children, (child, index) => {
      if (!child) {
        return child
      }

      let { col } = child.props

      return React.cloneElement(child, {
        key: index,
        col: col || Number.parseInt(surplus / allocation, 10),
      })
    })
  }

  render() {
    let { className, children, ...others } = this.props

    children = this.getChildren()
    return (
      <div {...others} className={classnames('row', className)}>
        {children}
      </div>
    )
  }
}
