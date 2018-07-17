import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class FlexItem extends PureComponent {
  // prop type校验
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.any,

    /**
     * 占比
     */
    flex: PropTypes.number,
  }
  // 默认props
  static defaultProps = {
    flex: 1,
  }
  // 渲染
  render() {
    let { flex, children, className, ...others } = this.props,
      flexClass = `flex-item${flex > 1 ? `-${flex}` : ''}`

    return (
      <div {...others} className={classnames(flexClass, className)}>
        {children}
      </div>
    )
  }
}
