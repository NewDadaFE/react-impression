import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Option extends React.PureComponent {
  static propTypes = {
    /**
     * 是否不可用
     */
    disabled: PropTypes.bool,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 是否选中
     */
    active: PropTypes.bool,

    /**
     * 值
     */
    value: PropTypes.any.isRequired,

    /**
     * 点击回调函数
     */
    onClick: PropTypes.func,

    /**
     * 子组件
     */
    children: PropTypes.any,
  }

  static defaultProps = {
    disabled: false,
    active: false,
  }

  render() {
    const {
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
