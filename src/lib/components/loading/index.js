import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import LoadingAddon from './LoadingAddon'

let _loading,
  _startDate,
  _endDate,
  _duration = 1000

export default class Loading extends PureComponent {
  /**
   * 初始信息.
   */
  constructor(props, context) {
    super(props, context)
    _loading = this

    const { loading } = props

    props.duration && (_duration = props.duration)
    this.state = {
      loading: loading === undefined ? true : loading,
    }
  }
  // props校验
  static propTypes = {
    // 自定义样式
    className: PropTypes.string,
    // 类型
    type: PropTypes.oneOf(['fountain', 'wave', 'pendule', 'cyclone']),
    // 加载文本
    loadingMsg: PropTypes.string,
    // 可关闭
    closeable: PropTypes.bool,
    // 停留时间
    duration: PropTypes.number,
    // 是否显示
    loading: PropTypes.bool,
    // 是否全屏
    full: PropTypes.bool,
    // 子节点
    children: PropTypes.any,
  }
  // 默认props
  static defaultProps = {
    type: 'cyclone',
    closeable: false,
    loadingMsg: '加载中',
    full: false,
    loading: true,
  }

  componentWillReceiveProps(props) {
    if (props.loading !== this.props.loading) {
      this.setState({
        loading: props.loading,
      })
    }
  }

  getClass() {
    let classMap = {
      'loading-container': true,
    }

    if (this.props.full) {
      this.disableScroll()
      classMap['full-screen'] = true
    } else {
      this.enableScroll()
    }

    return classMap
  }

  componentWillUnmount() {
    this.enableScroll()
  }

  documentBody() {
    return document.body
  }

  disableScroll() {
    const documentBody = this.documentBody()
    if (documentBody) {
      documentBody.style.setProperty('overflow', 'hidden')
    }
  }

  enableScroll() {
    const documentBody = this.documentBody()
    if (documentBody) {
      documentBody.style.removeProperty('overflow')
    }
  }

  /**
   * 关闭loading.
   */
  hideHandle = () => {
    let { closeable } = this.props

    closeable &&
      this.setState({
        loading: false,
      })
  }

  render() {
    let { type, loadingMsg, className } = this.props,
      { loading } = this.state

    return (
      <div className={classnames(className, this.getClass())}>
        {loading && (
          <div
            className={classnames('loading-mask', className)}
            onClick={this.hideHandle}
          >
            <LoadingAddon
              type={type}
              loading={loading}
              loadingMsg={loadingMsg}
            />
          </div>
        )}
        {this.props.children}
      </div>
    )
  }
}

Loading.Addon = LoadingAddon
Loading.show = () => {
  _startDate = new Date()
  _loading.setState({
    loading: true,
  })
}

Loading.hide = () => {
  _endDate = new Date()
  if (_endDate - _startDate < _duration) {
    setTimeout(() => {
      _loading.setState({
        loading: false,
      })
    }, _duration - (_endDate - _startDate))

    return
  }

  _loading.setState({
    loading: false,
  })
}
