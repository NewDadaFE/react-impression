import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * MessageItem组件.
 */
export default class MessageItem extends PureComponent {
  // prop type校验
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  }
  /**
   * 渲染.
   */
  render() {
    let { children, className } = this.props

    return (
      <div className={classnames('message-item', className)}>
        <div className='message-item-title'>
          <i className={classnames(['fa', 'fa-check-circle'])} />
        </div>
        <div className='message-item-body'>{children}</div>
      </div>
    )
  }
}
