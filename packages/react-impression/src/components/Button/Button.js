import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Ico from '../Ico'

const iconSize = {
  xs: 'sm',
  sm: 'sm',
  md: 'sm',
  lg: 'md',
}
export default class Button extends React.PureComponent {
  static propTypes = {
    /**
     * 子组件
     */
    children: PropTypes.node,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 主题样式
     */
    theme: PropTypes.oneOf([
      'primary',
      'secondary',
      'default',
      'dashed',
      'text',
    ]),

    /**
     * click事件
     */
    onClick: PropTypes.func,

    /**
     * 是否outline
     */
    outline: PropTypes.bool,

    /**
     * 尺寸
     */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),

    /**
     * 形状
     */
    shape: PropTypes.oneOf(['circle']),

    /**
     * 是否block元素
     */
    block: PropTypes.bool,

    /**
     * 按钮加载中的状态
     */
    loading: PropTypes.bool,

    /**
     * 按钮的图标
     */
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }

  static defaultProps = {
    theme: 'primary',
    block: false,
    outline: false,
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
      loading,
      icon,
      ...others
    } = this.props
    delete others.eventKey
    const btnSize = size
      ? `btn${icon && (!children || shape) ? '-icon' : ''}-${size}`
      : icon
        ? `btn${!children ? '-icon' : ''}-md`
        : ''
    const iconMargin =
      children && !shape
        ? {
          marginRight: theme === 'text' ? '8px' : '4px',
        }
        : {}

    return (
      <button
        {...others}
        onClick={onClick}
        className={classnames(
          !close && 'btn',
          !close && `btn${outline ? '-outline' : ''}-${theme}`,
          btnSize,
          shape && icon && `btn-${shape}`,
          close && 'close',
          block && 'btn-block',
          icon && 'btn-height',
          className
        )}
      >
        {loading ? (
          <span className='btn-loading-circle'>
            <span className='btn-loading-addon' style={iconMargin} />
            {children && <span className='btn-loading-message'>加载中...</span>}
          </span>
        ) : (
          <>
            {typeof icon === 'string' ? (
              <Ico type={icon} size={iconSize[size]} style={iconMargin} />
            ) : (
              icon &&
              React.cloneElement(icon, {
                style: { ...iconMargin, ...icon.props.style },
              })
            )}
            {shape !== 'circle' && <span>{children}</span>}
          </>
        )}
      </button>
    )
  }
}
