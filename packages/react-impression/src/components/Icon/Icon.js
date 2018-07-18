import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Icon extends React.PureComponent {
  static propTypes = {
    /**
     * 图标类型
     */
    type: PropTypes.string,

    /**
     * 是否在左边
     */
    left: PropTypes.bool,

    /**
     * 是否在右边
     */
    right: PropTypes.bool,

    /**
     * 尺寸
     */
    size: PropTypes.string,

    /**
     * 自定义样式
     */
    className: PropTypes.string,
  }
  // 默认props
  static defaultProps = {
    left: false,
    right: false,
  }
  // 渲染
  render() {
    const { type, size, left, right, className, ...others } = this.props
    const typeClass = `fa-${type}`
    const sizeClass = size ? `fa-${size}` : null
    const leftClass = left ? 'offset-r' : null
    const rightClass = right ? 'offset-l' : null

    return (
      <i
        {...others}
        className={classnames(
          'fa',
          typeClass,
          sizeClass,
          leftClass,
          rightClass,
          className
        )}
      />
    )
  }
}
