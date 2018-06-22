import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Portal extends React.Component {
  static propTypes = {
    getContainer: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    didUpdate: PropTypes.func,
  }

  componentDidMount() {
    this.createContainer()
  }
  /*
  * Portal的children(即外部用到的类似confirm、alert组件节点)或者getcontainer改变的时候会触发update
  * */
  componentDidUpdate(prevProps) {
    const { didUpdate } = this.props
    if (didUpdate) {
      didUpdate(prevProps)
    }
  }

  componentWillUnmount() {
    this.removeContainer()
  }

  createContainer() {
    this._container = this.props.getContainer()
    this.forceUpdate()
  }

  removeContainer() {
    if (this._container) {
      this._container.parentNode.removeChild(this._container)
    }
  }

  render() {
    if (this._container) {
      return ReactDOM.createPortal(this.props.children, this._container)
    }
    return null
  }
}
