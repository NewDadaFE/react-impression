import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import ModalHeader from '../ModalHeader'
import ModalBody from '../ModalBody'
import ModalFooter from '../ModalFooter'

/**
 * Modal组件.
 */
const Modal = ({ size, className, children, ...others }) => {
  let sizeClass = size ? `modal-${size}` : null

  return (
    <div {...others} className={classnames('modal', className)}>
      <div className={classnames('modal-dialog', sizeClass)}>
        <div className='modal-content slideInDown'>{children}</div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.any,
  // 自定义样式
  className: PropTypes.string,
  // 大小
  size: PropTypes.string,
}
Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
