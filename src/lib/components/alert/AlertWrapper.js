import * as React from 'react'
import * as ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import propTypes from './propTypes'
import Alert from './Alert'
import ContainerRender from '../../utils/ContainerRender'
import Portal from '../../utils/Portal'

const IS_REACT_16 = 'createPortal' in ReactDOM

class AlertWrap extends React.Component {
  static propTypes = {
    ...propTypes,
    // alert在dom中的位置
    getContainer: PropTypes.element,
  }

  static defaultProps = {
    visible: false,
  }

  shouldComponentUpdate({ visible }) {
    return !!(this.props.visible || visible)
  }

  saveAlert = node => {
    this._component = node
  }

  getComponent = () => {
    return <Alert ref={this.saveAlert} {...this.props} key='alert' />
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

export default AlertWrap
