import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import ModalHeader from '../ModalHeader'
import ModalBody from '../ModalBody'
import ModalFooter from '../ModalFooter'

class Modal extends React.Component {
  static propTypes = {
    /**
     * 子组件
     */
    children: PropTypes.any,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 大小
     */
    size: PropTypes.string,

    /**
     * 限制最大高度
     */
    isLimitHeight: PropTypes.bool,
  }

  static defaultProps = {
    isLimitHeight: false,
  }

  documentBody() {
    return document.body
  }

  componentWillUnmount() {
    this.enableScroll()
  }

  componentDidMount() {
    this.disableScroll()
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
      isLimitHeight,
      ...others
    } = this.props
    const sizeClass = size ? `modal-${size}` : null

    return (
      <div {...others} className={classnames('modal', { 'limit-height': isLimitHeight }, className)}>
        <div className={classnames('modal-dialog', sizeClass)}>
          <div className='modal-content slideInDown'>{children}</div>
        </div>
      </div>
    )
  }
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
