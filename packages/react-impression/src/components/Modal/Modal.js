import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { Portal } from 'react-portal'
import ModalHeader from '../ModalHeader'
import ModalBody from '../ModalBody'
import ModalFooter from '../ModalFooter'

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
    size: PropTypes.oneOf(['sm', 'lg']),

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
     * 关闭modal的触发函数，只有当closeOnEsc为true的时候才会触发
     */
    onHide: PropTypes.func,

    /**
     * modal显示与否
     */
    isShow: PropTypes.bool,
  }

  static defaultProps = {
    scrollInside: false,
    isShow: false,
    closeOnEsc: true,
    closeOnOutsideClick: true,
    onHide: () => {},
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      this.removeKeydownListener()
    }
    this.enableScroll()
  }

  componentDidUpdate(prevProps, prevState) {
    const { isShow, closeOnEsc } = this.props

    if (prevProps.isShow !== isShow) {
      if (isShow) {
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
    const { closeOnOutsideClick, onHide } = this.props
    if (!closeOnOutsideClick) return
    onHide()
  }

  handleKeydown = e => {
    const { closeOnEsc, onHide } = this.props
    if (!closeOnEsc) return
    if (e.keyCode === KEYCODE_ESCAPE) {
      onHide()
    }
  }

  get modalStyle() {
    const { style, isShow } = this.props
    const showStyle = !isShow
      ? {
        display: 'none',
      }
      : {}

    return Object.assign({}, style, showStyle)
  }

  render() {
    const { size, className, children, scrollInside, ...others } = this.props
    const sizeClass = size ? `modal-${size}` : null

    delete others.isShow
    delete others.closeOnEsc
    delete others.onHide
    delete others.closeOnOutsideClick

    return (
      <Portal>
        <div
          {...others}
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
            <div className='modal-content slideInDown'>{children}</div>
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
