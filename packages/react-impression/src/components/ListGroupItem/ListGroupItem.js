import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class ListGroupItem extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      Tag: props.href ? 'a' : 'li',
    }
  }

  static propTypes = {
    /**
     * 设置链接
     */
    href: PropTypes.string,
    /**
     * 是否可点击
     */
    disabled: PropTypes.bool,
    /**
     * 是否处于选中状态
     */
    active: PropTypes.bool,
    /**
     * 头部信息内容
     */
    header: PropTypes.string,
    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 子组件
     */
    children: PropTypes.any,
  }

  render() {
    const { href, disabled, active, children, className, ...others } = this.props
    const { Tag } = this.state
    const disabledStyle = disabled ? 'disabled' : null
    const activeStyle = active ? 'active' : null
    const actionStyle = href ? 'list-group-item-action' : null

    return (
      <Tag
        {...others}
        href={href}
        className={classnames(
          'list-group-item',
          activeStyle,
          disabledStyle,
          actionStyle,
          className
        )}
      >
        {children}
      </Tag>
    )
  }
}
