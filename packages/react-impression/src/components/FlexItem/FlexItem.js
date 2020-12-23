import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class FlexItem extends React.PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.node,

    /**
     * 占比
     */
    flex: PropTypes.oneOf([1, 2, 3, 4, '1', '2', '3', '4']),
  }

  static defaultProps = {
    flex: 1,
  }

  render() {
    const { flex, className, ...others } = this.props
    let { children } = this.props
    const flexClass = `flex-item${flex > 1 ? `-${flex}` : ''}`

    return (
      <div {...others} className={classnames(flexClass, className)}>
        {children}
      </div>
    )
  }
}
