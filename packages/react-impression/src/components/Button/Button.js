import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      Tag: props.href ? 'a' : 'button',
    }
  }

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
     * 主题样式
     */
    theme: PropTypes.oneOf(['primary', 'default', 'secondary']),

    /**
     * click事件
     */
    onClick: PropTypes.func,

    /**
     * 是否outline
     */
    outline: PropTypes.bool,

    /**
     * 尺寸，sm, lg或者默认
     */
    size: PropTypes.string,

    /**
     * 形状，可选值为pill
     */
    shape: PropTypes.string,

    /**
     * 按钮的链接
     */
    href: PropTypes.string,

    /**
     * 是否为关闭样式按钮
     */
    close: PropTypes.bool,

    /**
     * 是否block元素
     */
    block: PropTypes.bool,
  }

  static defaultProps = {
    theme: 'primary',
  }

  render() {
    let {
        theme,
        outline,
        size,
        shape,
        className,
        onClick,
        href,
        close,
        block,
        children,
        ...others
      } = this.props
    const { Tag } = this.state

    delete others.eventKey

    return (
      <Tag
        {...others}
        type={href ? null : 'button'}
        onClick={onClick}
        href={href}
        className={classnames(
          !close && 'btn',
          !close && `btn${outline ? '-outline' : ''}-${theme}`,
          size && `btn-${size}`,
          shape && `btn-${shape}`,
          close && 'close',
          block && 'btn-block',
          className
        )}
      >
        {children}
      </Tag>
    )
  }
}
