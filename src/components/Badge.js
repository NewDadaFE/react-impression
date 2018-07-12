import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * 徽章组件.
 */
export default class Badge extends PureComponent {
  static propTypes = {
    // 内容
    content: PropTypes.string,
    // 样式
    theme: PropTypes.string,
    // 类型
    type: PropTypes.string,
    // addon尺寸
    size: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
  }
  // 默认props
  static defaultProps = {
    theme: 'primary',
  }
  render() {
    let { content, children, theme, type, size, className } = this.props,
      themeClass = `bg-${theme}`,
      typeClass = `badge-${type}`,
      badgeSizeClass = size ? `badge-addon-${size}` : null

    return (
      <span className={classnames('badge', typeClass, className)}>
        <div className={classnames('badge-addon', badgeSizeClass, themeClass)}>
          {content}
        </div>
        {children}
      </span>
    )
  }
}
