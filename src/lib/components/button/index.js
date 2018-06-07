import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

/**
 * 按钮组件.
 */
const Button = props => {
  const {
    theme,
    type,
    outline,
    ghost,
    size,
    shape,
    className,
    onClick,
    href,
    close,
    block,
    children,
    ...others
  } = props
  const Component = props.href ? 'a' : 'button'
  const _type = theme || type
  const _ghost = outline || ghost

  return (
    <Component
      {...others}
      type={href ? null : 'button'}
      onClick={onClick}
      href={href}
      className={classnames(
        !close && 'btn',
        !close && `btn${_ghost ? '-outline' : ''}-${_type}`,
        size && `btn-${size}`,
        shape && `btn-${shape}`,
        close && 'close',
        block && 'btn-block',
        className
      )}
    >
      {children}
    </Component>
  )
}

Button.propTypes = {
  // 自定义样式
  className: PropTypes.string,
  // 样式（primary、default、danger）
  // deprecated
  theme: PropTypes.string,
  type: PropTypes.string,
  // click事件
  onClick: PropTypes.func,
  // 是否outline
  outline: PropTypes.bool,
  // 同outline
  ghost: PropTypes.bool,
  // 尺寸
  size: PropTypes.string,
  // 形状
  shape: PropTypes.string,
  // 链接地址
  href: PropTypes.string,
  // 是否关闭按钮
  close: PropTypes.bool,
  // 是否block
  block: PropTypes.bool,
  // 子节点
  children: PropTypes.any,
}

Button.defaultProps = {
  type: 'default',
  size: 'md',
}

export default Button
