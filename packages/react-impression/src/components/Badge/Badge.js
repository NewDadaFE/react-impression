import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Badge extends React.PureComponent {
  static propTypes = {
    /**
     * 内容
     */
    content: PropTypes.string,

    /**
     * 样式
     */
    theme: PropTypes.oneOf([
      'primary',
      'secondary',
      'warning',
      'danger',
      'success',
      'inverse',
    ]),

    /**
     * 类型
     */
    type: PropTypes.oneOf(['legend']),

    /**
     * 尺寸
     */
    size: PropTypes.oneOf(['lg', 'sm']),

    /**
     * 子组件
     */
    children: PropTypes.node,

    /**
     * 自定义样式
     */
    className: PropTypes.string,
  }

  static defaultProps = {
    theme: 'primary',
  }

  render() {
    const { content, theme, type, size, className } = this.props
    const themeClass = `bg-${theme}`
    const typeClass = `badge-${type}`
    const badgeSizeClass = size ? `badge-addon-${size}` : null
    let { children } = this.props

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
