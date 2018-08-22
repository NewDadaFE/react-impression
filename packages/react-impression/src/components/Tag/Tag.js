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
     * 是否outline
     */
    outline: PropTypes.bool,

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
    const tagStyle = outline ? `tag-outline-${theme}` : `tag-${theme}`
    const tagShape = shape ? `tag-${shape}` : ''

    return (
      <span
        {...others}
        className={classnames('tag', tagStyle, tagShape, className)}
      >
        {children}
        {closable && (
          <span className='tag-close' onClick={onClose}>
            &times;
          </span>
        )}
      </span>
    )
  }
}
