import * as React from 'react'
import * as ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Modal from './Modal'
import ContainerRender from '../../utils/ContainerRender'
import Portal from '../../utils/Portal'

const IS_REACT_16 = 'createPortal' in ReactDOM

class ModalWrap extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    // 自定义样式
    className: PropTypes.string,
    // 大小
    size: PropTypes.string,
    // 是否显示
    visible: PropTypes.bool,
    // alert在dom重的位置
    getContainer: PropTypes.element,
  }

  static defaultProps = {
    visible: false,
  }

  shouldComponentUpdate({ visible }) {
    return !!(this.props.visible || visible)
  }

  saveModal = node => {
    this._component = node
  }

  getComponent = () => {
    return <Modal ref={this.saveModal} {...this.props} key='modal' />
  }

  getContainer = () => {
    const container = document.createElement('div')
    if (this.props.getContainer) {
      this.props.getContainer().appendChild(container)
    } else {
      document.body.appendChild(container)
    }
    return container
  }

  render() {
    const { visible } = this.props
    let portal = null

    if (!IS_REACT_16) {
      return (
        <ContainerRender
          parent={this}
          visible={visible}
          getComponent={this.getComponent}
          getContainer={this.getContainer}
        >
          {({ renderComponent, removeContainer }) => {
            this.renderComponent = renderComponent
            this.removeContainer = removeContainer
            return null
          }}
        </ContainerRender>
      )
    }

    if (visible || this._component) {
      portal = (
        <Portal getContainer={this.getContainer}>{this.getComponent()}</Portal>
      )
    }
    return portal
  }
}

export default ModalWrap
