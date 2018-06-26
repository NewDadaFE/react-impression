import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * Form 组件.
 */
export default class Form extends PureComponent {
  // props校验
  static propTypes = {
    // 排列方向 inline horizontal
    type: PropTypes.string,
    // 自定义样式
    className: PropTypes.string,
    children: PropTypes.any,
  }
  // 默认props
  static defaultProps = {
    type: 'inline',
  }
  // 渲染
  render() {
    let { type, className, children, ...others } = this.props,
      typeClass = type ? `form-${type}` : null

    return (
      <form {...others} className={classnames(typeClass, className)}>
        {children}
      </form>
    )
  }
}
