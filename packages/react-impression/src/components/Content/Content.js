import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Content extends React.PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子元素
     */
    children: PropTypes.element.isRequired,
  }

  render() {
    let { className, children } = this.props

    children &&
      (children = React.cloneElement(children, {
        key: children.props.location.pathname,
      }))

    return <div className={classnames('content', className)}>{children}</div>
  }
}
