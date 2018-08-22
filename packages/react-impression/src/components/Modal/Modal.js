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
    children: PropTypes.node,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 大小
     */
    size: PropTypes.oneOf(['sm', 'lg']),

    /**
     * Modal是否内部滚动
     */
    scrollInside: PropTypes.bool,
  }

  static defaultProps = {
    scrollInside: false,
  }

  componentDidMount() {
    this.disableScroll()
  }

  componentWillUnmount() {
    this.enableScroll()
  }

  disableScroll() {
    const documentBody = document.body

    if (documentBody) {
      documentBody.style.setProperty('overflow', 'hidden')
    }
  }

  enableScroll() {
    const documentBody = document.body

    if (documentBody) {
      documentBody.style.removeProperty('overflow')
    }
  }

  render() {
    const { size, className, children, scrollInside, ...others } = this.props
    const sizeClass = size ? `modal-${size}` : null

    return (
      <div
        {...others}
        className={classnames(
          'modal',
          { 'limit-height': scrollInside },
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

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
