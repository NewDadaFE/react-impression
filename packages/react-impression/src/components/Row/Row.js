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
    const { children } = this.props
    let count = 0
    let allocation = 0

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

    const surplus = 12 - count

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
    const { className, children, ...others } = this.props

    const _children = this.getChildren()

    return (
      <div {...others} className={classnames('row', className)}>
        {_children}
      </div>
    )
  }
}
