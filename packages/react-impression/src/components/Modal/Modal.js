import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { PortalWithState } from 'react-portal'
import ModalHeader from '../ModalHeader'
import ModalBody from '../ModalBody'
import ModalFooter from '../ModalFooter'

const KeyCode = {
  ESC: 27,
}

const IS_REACT_16 = 'createPortal' in ReactDOM

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
     * keyboard关闭modal的触发函数，只有当keyboard为true的时候才会触发
     */
    onClose: PropTypes.func,
  }

  static defaultProps = {
    keyboard: false,
    scrollInside: false,
  }

  componentDidMount() {
    this.disableScroll()
  }

  componentWillUnmount() {
    this.enableScroll()
  }

  disableScroll() {
    document.body.style.setProperty('overflow', 'hidden')
  }

  enableScroll() {
    document.body.style.removeProperty('overflow')
  }

  render() {
    const {
      size,
      className,
      children,
      scrollInside,
      onClose,
      closeOnEsc,
      ...others
    } = this.props
    const sizeClass = size ? `modal-${size}` : null

    delete others.onClose
    delete others.keyboard

    const portalChildren = (
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

    return (
      <PortalWithState closeOnEsc={closeOnEsc} onClose={onClose} defaultOpen>
        {({ portal }) => portal(portalChildren)}
      </PortalWithState>
    )
  }
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
