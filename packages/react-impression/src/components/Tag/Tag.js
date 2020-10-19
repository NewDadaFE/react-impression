import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Tag extends React.PureComponent {
  static propTypes = {
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
  }

  static defaultProps = {
    theme: 'primary',
    closable: false,
    outline: false,
  }

  render() {
    const {
      theme,
      closable,
      onClose,
      shape,
      outline,
      children,
      className,
      ...others
    } = this.props
    const tagStyle = outline ? `dada-tag-outline-${theme}` : `dada-tag-${theme}`
    const tagShape = shape ? `dada-tag-${shape}` : ''

    return (
      <span
        {...others}
        className={classnames('dada-tag', tagStyle, tagShape, className)}
      >
        {children}
        {closable && (
          <span className='dada-tag-close' onClick={onClose}>
            &times;
          </span>
        )}
      </span>
    )
  }
}
