import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TextLink = React.forwardRef((props, ref) => {
  const {
    href,
    theme,
    onClick,
    children,
    disabled,
    className,
    ...others
  } = props
  // 链接组件的样式类名
  const linkClassNames = classnames(
    'dada-text-link',
    {
      'dada-text-link-disabled': disabled,
      'dada-text-link-secondary': theme === 'secondary',
      'dada-text-link-primary': theme === 'primary',
    },
    className
  )

  /**
   * disabled时阻止默认行为和点击事件
   * @param event
   */
  function clickHandler(event) {
    if (disabled) {
      event.preventDefault()
      return
    }
    onClick && onClick(event)
  }

  // href 存在，用 a 标签保留页面跳转功能
  if (href) {
    return (
      <a
        href={href}
        className={linkClassNames}
        onClick={clickHandler}
        ref={ref}
        {...others}
      >
        {children}
      </a>
    )
  }
  return (
    <span
      className={linkClassNames}
      onClick={clickHandler}
      ref={ref}
      {...others}
    >
      {children}
    </span>
  )
})

TextLink.propTypes = {
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
   * 链接指向的URL
   */
  href: PropTypes.string,

  /**
   * 主题色
   */
  theme: PropTypes.oneOf(['primary', 'secondary']),
}
TextLink.defaultProps = {
  disabled: false,
  theme: 'primary',
}
TextLink.displayName = 'TextLink'

export default TextLink
