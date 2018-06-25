import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * NavItem 组件
 */
export default class NavItem extends PureComponent {
  // props校验
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    eventKey: PropTypes.any,
    onClick: PropTypes.func,
  }
  // 默认props
  static defaultProps = {
    disabled: false,
    active: false,
  }

  parent() {
    return this.context.componentNav
  }

  getRef = ref => {
    this.main = { node: this, ref }
    this.parent().onItemCreate(this.main)
  }

  componentWillUnmount() {
    this.parent().onItemDestroy(this.main)
  }

  // 回调函数
  onClickHandle = () => {
    let { disabled, active, onClick, eventKey } = this.props

    !disabled && !active && onClick(eventKey)
  }
  // 渲染
  render() {
    let {
        disabled,
        active,
        eventKey,
        className,
        children,
        ...others
      } = this.props,
      childClass = {
        disabled,
        active,
      }

    return eventKey !== undefined ? (
      <li
        {...others}
        ref={this.getRef}
        className={classnames('nav-item', className)}
        onClick={this.onClickHandle}
      >
        <span className={classnames('nav-link', childClass)}>{children}</span>
      </li>
    ) : (
      <div
        {...others}
        ref={this.getRef}
        className={classnames('nav-item', className)}
      >
        {children}
      </div>
    )
  }
}

NavItem.contextTypes = {
  componentNav: PropTypes.any,
}
