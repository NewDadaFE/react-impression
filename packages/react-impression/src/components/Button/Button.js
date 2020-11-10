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

const Button = React.forwardRef((props, ref) => {
  const {
    theme,
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
    iconPosition,
    ...others
  } = props
  // 为了兼容旧版属性，手动删除 outline
  delete others.outline
  delete others.eventKey

  // 判断按钮是否为纯图标按钮：无children 或者 shape 为 circle
  const isIconBtn = !children || shape === 'circle'

  const btnSize = isIconBtn ? `btn-icon-${size}` : `btn-${size}`
  // 纯图标按钮不需要设置外边距，在文本按钮和普通按钮中，图标右侧外边距有差异
  let iconMargin
  if (!isIconBtn) {
    // icon的margin的类型
    let marginType =
      iconPosition && iconPosition === 'right' ? 'marginLeft' : 'marginRight'
    // icon的margin的数值
    let marginDistance = theme === 'text' ? '8px' : '4px'
    iconMargin = { [marginType]: marginDistance }
  } else {
    iconMargin = {}
  }
  return (
    <button
      {...others}
      onClick={onClick}
      className={classnames(
        {
          [`btn btn-${theme}`]: !close,
          [`btn-${shape}`]: shape && icon,
          close: close,
          'btn-block': block,
        },
        btnSize,
        className
      )}
      ref={ref}
    >
      {loading ? (
        <span className='btn-loading-circle'>
          <span className='btn-loading-addon' style={iconMargin} />
          {children && <span className='btn-loading-message'>加载中...</span>}
        </span>
      ) : (
        <>
          {shape !== 'circle' &&
            (iconPosition && iconPosition === 'right') &&
            (children && <span>{children}</span>)}
          {typeof icon === 'string' ? (
            <Ico
              type={icon}
              size={iconSize[size]}
              style={iconMargin}
              className='btn-icon'
            />
          ) : (
            icon &&
            React.cloneElement(icon, {
              className: 'btn-icon',
              style: { ...iconMargin, ...icon.props.style },
            })
          )}
          {/* 如果是圆形按钮，则不支持 children 属性 */}
          {shape !== 'circle' &&
            (!iconPosition || iconPosition !== 'right') &&
            (children && <span>{children}</span>)}
        </>
      )}
    </button>
  )
})

Button.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.node,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 按钮类型，同HTML button元素的 type
   */
  type: PropTypes.string,

  /**
   * 主题样式
   */
  theme: PropTypes.oneOf(['primary', 'secondary', 'dashed', 'text']),

  /**
   * click事件
   */
  onClick: PropTypes.func,

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

  /**
   * 按钮的位置
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * 按钮的位置 v2.1.2废弃
   * @ignore
   */
  outline: PropTypes.bool,
}
Button.defaultProps = {
  theme: 'primary',
  block: false,
  size: 'md',
  type: 'button',
}
Button.displayName = 'Button'

export default Button
