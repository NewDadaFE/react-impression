import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class SidebarBody extends PureComponent {
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
    const { className, children, ...others } = this.props

    return (
      <div
        ref='container'
        {...others}
        className={classnames('sidebar-body', className)}
      >
        {children}
      </div>
    )
  }
}
