import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class DropdownMenuItem extends React.PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.node,

    /**
     * 是否不可点击
     */
    disabled: PropTypes.bool,

    /**
     * 点击回调，参数列表：无
     */
    onClick: PropTypes.func,

    /**
     * 切换回调函数
     */
    toggleMenu: PropTypes.func,
  }

  static defaultProps = {
    disabled: false,
  }
  onClickHandle = () => {
    const { disabled, onClick, toggleMenu } = this.props

    !disabled && onClick && onClick()
    if (!disabled) toggleMenu()
  }

  render() {
    const { disabled, className, children } = this.props

    return (
      <li
        onClick={this.onClickHandle}
        className={classnames('dropdown-item', { disabled }, className)}
      >
        {children}
      </li>
    )
  }
}
