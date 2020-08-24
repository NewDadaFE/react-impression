import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  /**
   * 自定义样式
   */
  className: PropTypes.string,
  /**
   * 子组件
   */
  children: PropTypes.node,
  /**
   * 点击事件回调，参数：event
   */
  onClick: PropTypes.func,

  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,

  /**
   * 点击跳转链接
   */
  href: PropTypes.string,

  /**
   * 主题色
   */
  theme: PropTypes.string,
}
const TextLink = props => {
  const {
    href,
    theme = 'primary',
    disabled = false,
    onClick,
    children,
    className,
  } = props
  const getTheme = () => {
    return theme === 'default' ? 'text-link-default' : 'text-link-primary'
  }
  // href存在
  if (href) {
    return (
      <a
        href={href}
        className={classnames(
          { disabled: disabled },
          'textLink',
          getTheme(),
          className
        )}
      >
        {children}
      </a>
    )
  }
  return (
    <span
      className={classnames(
        { disabled: disabled },
        'textLink',
        getTheme(),
        className
      )}
      onClick={onClick}
    >
      {children}
    </span>
  )
}
TextLink.propTypes = propTypes
export default TextLink
