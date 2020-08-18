import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class NavItem extends React.PureComponent {
  static propTypes = {
    /**
     * 子组件
     */
    children: PropTypes.node,
    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 是否可以选中
     */
    disabled: PropTypes.bool,
    /**
     * 是否为激活状态，仅eventKey有值时有效
     */
    active: PropTypes.bool,
    /**
     * 事件关键字
     */
    eventKey: PropTypes.any,
    /**
     * 点击回调函数，参数列表：eventKey，event
     */
    onClick: PropTypes.func,
  }

  static defaultProps = {
    disabled: false,
    active: false,
  }
  /**
   * 回调函数
   */
  onClickHandle = event => {
    const { disabled, active, onClick, eventKey } = this.props

    !disabled && !active && onClick && onClick(eventKey, event)
  }

  render() {
    const {
      disabled,
      active,
      eventKey,
      className,
      children,
      ...others
    } = this.props
    const childClass = {
      disabled,
      active,
    }

    return eventKey !== undefined ? (
      <li
        {...others}
        className={classnames('nav-item', className, childClass)}
        onClick={this.onClickHandle}
      >
        <span className={classnames('nav-link')}>{children}</span>
      </li>
    ) : (
      <div {...others} className={classnames('nav-item', className)}>
        {children}
      </div>
    )
  }
}
