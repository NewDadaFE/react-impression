import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
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

  /**
   * modal组件的ref
   */
  wrap = null

  getWrap = ref => {
    this.wrap = ref
    if (ref) {
      this.wrap.focus()
    }
  }

  /**
   * 如果是react16则在body下创建div，并触发render更新
   */
  componentDidMount() {
    IS_REACT_16 && this.createContainer()
    this.disableScroll()
  }

  /**
   * 如果是react16则删除渲染的modal的dom节点
   */
  componentWillUnmount() {
    IS_REACT_16 && this.removeContainer()
    this.enableScroll()
  }

  onKeyDown(e) {
    const { keyboard, onClose } = this.props
    if (keyboard && e.keyCode === KeyCode.ESC) {
      onClose && onClose(e)
    }
  }

  disableScroll() {
    document.body.style.setProperty('overflow', 'hidden')
  }

  enableScroll() {
    document.body.style.removeProperty('overflow')
  }

  createContainer() {
    this._container = this.getContainer()
    this.forceUpdate()
  }

  getContainer = () => {
    const container = document.createElement('div')

    document.body.appendChild(container)
    return container
  }

  removeContainer() {
    if (this._container) {
      this._container.parentNode.removeChild(this._container)
    }
  }

  render() {
    const { size, className, children, scrollInside, ...others } = this.props
    const sizeClass = size ? `modal-${size}` : null

    delete others.onClose
    delete others.keyboard

    const portalChildren = (
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

    if (IS_REACT_16) {
      if (this._container) {
        return ReactDOM.createPortal(portalChildren, this._container)
      } else {
        return null
      }
    }

    return portalChildren
  }
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
