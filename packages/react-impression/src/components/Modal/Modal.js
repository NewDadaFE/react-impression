import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { Portal } from 'react-portal'
import ModalHeader from '../ModalHeader'
import ModalBody from '../ModalBody'
import ModalFooter from '../ModalFooter'
import Ico from '../Ico'

const KEYCODE_ESCAPE = 27

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
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

    /**
     * Modal是否内部滚动
     */
    scrollInside: PropTypes.bool,

    /**
     * 是否支持键盘esc关闭
     */
    closeOnEsc: PropTypes.bool,

    /**
     * 是否支持点击mask关闭
     */
    closeOnOutsideClick: PropTypes.bool,

    /**
     * 关闭modal的触发函数
     */
    onClose: PropTypes.func,

    /**
     * modal显示与否
     */
    isOpen: PropTypes.bool,
    /**
     * 是否显示关闭图标
     */
    showClose: PropTypes.bool,
  }

  static defaultProps = {
    size: 'md',
    scrollInside: false,
    isOpen: true,
    closeOnEsc: true,
    closeOnOutsideClick: true,
    showClose: false,
    onClose: () => {},
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen, closeOnEsc } = this.props

    if (prevProps.isOpen !== isOpen) {
      if (isOpen) {
        this.disableScroll()
        if (closeOnEsc) {
          this.addKeydownListener()
        }
      } else {
        this.enableScroll()
        if (closeOnEsc) {
          this.removeKeydownListener()
        }
      }
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      this.removeKeydownListener()
    }
    this.enableScroll()
  }

  addKeydownListener = () => {
    document.addEventListener('keydown', this.handleKeydown)
  }

  removeKeydownListener = () => {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  disableScroll() {
    document.body.style.setProperty('overflow', 'hidden')
  }

  enableScroll() {
    document.body.style.removeProperty('overflow')
  }

  handleStopPropagation = e => {
    e.stopPropagation()
  }

  handleModalMaskClick = () => {
    const { closeOnOutsideClick, onClose } = this.props
    if (!closeOnOutsideClick) return
    onClose()
  }

  handleKeydown = e => {
    const { closeOnEsc, onClose } = this.props
    if (!closeOnEsc) return
    if (e.keyCode === KEYCODE_ESCAPE) {
      onClose()
    }
  }

  get modalStyle() {
    const { style, isOpen } = this.props
    const showStyle = !isOpen
      ? {
        display: 'none',
      }
      : {}

    return Object.assign({}, style, showStyle)
  }

  render() {
    const {
      size,
      className,
      children,
      scrollInside,
      onClose,
      showClose,
    } = this.props
    const sizeClass = size ? `modal-${size}` : null

    return (
      <Portal>
        <div
          style={this.modalStyle}
          onClick={this.handleModalMaskClick}
          className={classnames('modal', className, {
            'limit-height': scrollInside,
          })}
        >
          <div
            className={classnames('modal-dialog', sizeClass)}
            onClick={this.handleStopPropagation}
          >
            <div className='modal-content dada-shadow-darker'>
              {showClose && (
                <Ico
                  className='dada-modal-close'
                  size='md'
                  type='times'
                  onClick={onClose}
                />
              )}
              {children}
            </div>
          </div>
        </div>
      </Portal>
    )
  }
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
