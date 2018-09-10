import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { PortalWithState } from 'react-portal'
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

    /**
     * 是否支持键盘esc关闭
     */
    closeOnEsc: PropTypes.bool,

    /**
     * 关闭modal的触发函数，只有当closeOnEsc为true的时候才会触发
     */
    onClose: PropTypes.func,
  }

  static defaultProps = {
    scrollInside: false,
    onClose: () => {},
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

    return (
      <PortalWithState closeOnEsc={closeOnEsc} onClose={onClose} defaultOpen>
        {({ portal, closePortal }) =>
          portal(
            <div
              {...others}
              onClick={() => {
                closePortal()
                onClose && onClose()
              }}
              className={classnames('modal', className, {
                'limit-height': scrollInside,
              })}
            >
              <div
                className={classnames('modal-dialog', sizeClass)}
                onClick={e => e.stopPropagation()}
              >
                <div className='modal-content slideInDown'>{children}</div>
              </div>
            </div>
          )
        }
      </PortalWithState>
    )
  }
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
