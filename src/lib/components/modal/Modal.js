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

  componentWillUnmount() {
    if (this.props.visible) {
      this.enableScroll()
    }
  }

  documentBody() {
    return document.body
  }

  disableScroll() {
    const documentBody = this.documentBody()
    if (documentBody) {
      documentBody.style.setProperty('overflow', 'hidden')
    }
  }

  enableScroll() {
    const documentBody = this.documentBody()
    if (documentBody) {
      documentBody.style.removeProperty('overflow')
    }
  }

  render() {
    const { size, className, children, visible, ...others } = this.props
    let sizeClass = size ? `modal-${size}` : null

    if (!visible) {
      this.enableScroll()
      return null
    } else {
      this.disableScroll()
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
