import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Split extends React.PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 子组件
     */
    children: PropTypes.node,
  }

  render() {
    const { children, className } = this.props

    return (
      <span className={classnames('split', className)}>{children || '|'}</span>
    )
  }
}
