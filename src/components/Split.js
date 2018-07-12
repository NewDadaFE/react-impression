import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * Split组件.
 */
export default class Split extends PureComponent {
  static propTypes = {
    // 自定义样式
    className: PropTypes.string,
    children: PropTypes.any,
  }
  // 默认props
  static defaultProps = {}
  render() {
    let { children, className } = this.props

    return (
      <span className={classnames('split', className)}>{children || '|'}</span>
    )
  }
}
