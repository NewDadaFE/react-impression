import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import ModalHeader from '../ModalHeader'
import ModalBody from '../ModalBody'
import ModalFooter from '../ModalFooter'

const KeyCode = {
  ESC: 27,
}

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
    keyboard: PropTypes.bool,

    /**
     * keyboard关闭modal的触发函数，只有当keyboard为true的时候才会触发
     */
    onClose: PropTypes.func,
  }

  static defaultProps = {
    keyboard: true,
    scrollInside: false,
  }

  getWrap = ref => {
    this.wrap = ref
  }

  componentDidMount() {
    this.disableScroll()
    this.wrap.focus()
  }

  componentWillUnmount() {
    this.enableScroll()
  }

  onKeyDown(e) {
    const { keyboard, onClose } = this.props
    if (keyboard && e.keyCode === KeyCode.ESC) {
      onClose && onClose(e)
    }
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
        ref={this.getWrap}
        tabIndex={-1}
        onKeyDown={e => this.onKeyDown(e)}
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
