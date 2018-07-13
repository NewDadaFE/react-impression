import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * Tag组件
 */
export default class Tag extends PureComponent {
  // props校验
  static propTypes = {
    // 样式（default、primary、success、info、warning、danger）
    theme: PropTypes.string,
    // 形状（pill）
    shape: PropTypes.string,
    // 是否outline
    outline: PropTypes.bool,
    // 是否可删除
    closable: PropTypes.bool,
    // 删除回调
    onClose: PropTypes.func,
    // 自定义样式
    className: PropTypes.string,
    children: PropTypes.any,
  }
  // 默认props
  static defaultProps = {
    theme: 'default',
    closable: false,
    outline: false,
  }
  // 渲染
  render() {
    let {
        theme,
        closable,
        onClose,
        shape,
        outline,
        children,
        className,
        ...others
      } = this.props,
      tagStyle = outline ? `tag-outline-${theme}` : `tag-${theme}`,
      tagShape = shape ? `tag-${shape}` : ''

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
