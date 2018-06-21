import classnames from 'classnames'
import React, { Component } from 'react'
import propTypes from './propTypes'

/**
 * Modal组件.
 */
class Modal extends Component {
  static propTypes = propTypes

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
    const {
      size,
      className,
      children,
      visible,
      isLimitHeight,
      ...others
    } = this.props
    let sizeClass = size ? `modal-${size}` : null

    if (!visible) {
      this.enableScroll()
      return null
    } else {
      this.disableScroll()
    }

    return (
      <div
        {...others}
        className={classnames(
          'modal',
          { 'limit-height': isLimitHeight },
          className
        )}
      >
        <div className={classnames('modal-dialog', sizeClass)}>
          <div className='modal-content slideInDown'>{children}</div>
        </div>
      </div>
    )
  }
}

export default Modal
