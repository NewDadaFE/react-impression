import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Ico from '../Ico'

const TAG_ICO_SIZE = {
  sm: 'xs',
  md: 'sm',
}

const Tag = React.forwardRef((props, ref) => {
  const {
    theme,
    closable,
    onClose,
    shape,
    outline,
    children,
    className,
    size,
    ...others
  } = props

  const realSize = shape ? 'sm' : size

  return (
    <span
      ref={ref}
      className={classNames(
        'dada-tag',
        `dada-tag-${realSize}`,
        {
          [`dada-tag-outline-${theme}`]: outline,
          [`dada-tag-${theme}`]: !outline,
          [`dada-tag-${shape}`]: shape,
        },
        className
      )}
      {...others}
    >
      <span className='dada-tag-text'>{children}</span>
      {closable && (
        <Ico
          className='dada-tag-close'
          type='times'
          size={TAG_ICO_SIZE[size]}
          onClick={onClose}
        />
      )}
    </span>
  )
})

Tag.propTypes = {
  /**
   * 样式
   */
  theme: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]),

  /**
   * 外边框样式
   */
  outline: PropTypes.bool,

  /**
   * 标签形状
   */
  shape: PropTypes.oneOf(['pill']),

  /**
   * 是否可删除
   */
  closable: PropTypes.bool,

  /**
   * 删除回调
   */
  onClose: PropTypes.func,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 子组件
   */
  children: PropTypes.node,
  /**
   * 尺寸
   */
  size: PropTypes.oneOf(['sm', 'md']),
}
Tag.defaultProps = {
  theme: 'primary',
  closable: false,
  outline: false,
  size: 'sm',
}

export default Tag
