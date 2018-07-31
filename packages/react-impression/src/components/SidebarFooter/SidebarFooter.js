import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class SidebarFooter extends React.PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.node,
  }

  render() {
    const { children, className, ...others } = this.props

    const _children = React.Children.map(children, child => {
      if (!child) {
        return child
      }

      let { className } = child.props

      return React.cloneElement(child, {
        className: classnames('sidebar-footer-item', className),
      })
    })

    return (
      <div {...others} className={classnames('sidebar-footer', className)}>
        {_children}
      </div>
    )
  }
}
