import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * Option组件.
 */
export default class Option extends PureComponent {
  // prop type校验
  static propTypes = {
    // 是否不可用
    disabled: PropTypes.bool,
    // 自定义样式
    className: PropTypes.string,
    // 是否选中
    active: PropTypes.bool,
    // value
    value: PropTypes.any.isRequired,
    // 回调
    onClick: PropTypes.func,
    children: PropTypes.any,
  }
  // 默认props
  static defaultProps = {
    disabled: false,
    active: false,
  }
  // 渲染
  render() {
    let {
      active,
      disabled,
      onClick,
      className,
      children,
      ...others
    } = this.props

    return (
      <li
        {...others}
        className={classnames('select-option', { active, disabled }, className)}
        onClick={onClick}
      >
        {children}
      </li>
    )
  }
}
