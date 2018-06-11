import classnames from 'classnames'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Modal组件.
 */
class Modal extends Component {
  static propTypes = {
    children: PropTypes.any,
    // 自定义样式
    className: PropTypes.string,
    // 大小
    size: PropTypes.string,
    // 是否可见
    visible: PropTypes.bool,
  }

  render() {
    const { size, className, children, visible, ...others } = this.props
    let sizeClass = size ? `modal-${size}` : null

    if (!visible) {
      document.body.style.overflow = ''
      return null
    } else {
      document.body.style.overflow = 'hidden'
    }

    return (
      <div {...others} className={classnames('modal', className)}>
        <div className={classnames('modal-dialog', sizeClass)}>
          <div className='modal-content slideInDown'>{children}</div>
        </div>
      </div>
    )
  }
}

export default Modal
