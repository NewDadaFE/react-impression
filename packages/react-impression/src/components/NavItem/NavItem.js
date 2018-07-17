import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class NavItem extends React.PureComponent {
  static propTypes = {
    /**
     * 子组件
     */
    children: PropTypes.any,
    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 是否可以选中
     */
    disabled: PropTypes.bool,
    /**
     * 是否为激活状态
     */
    active: PropTypes.bool,
    /**
     * 事件关键字
     */
    eventKey: PropTypes.any,
    /**
     * 点击回调函数
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
  onClickHandle = () => {
    const { disabled, active, onClick, eventKey } = this.props

    !disabled && !active && onClick(eventKey)
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
        className={classnames('nav-item', className)}
        onClick={this.onClickHandle}
      >
        <span className={classnames('nav-link', childClass)}>{children}</span>
      </li>
    ) : (
      <div {...others} className={classnames('nav-item', className)}>
        {children}
      </div>
    )
  }
}
