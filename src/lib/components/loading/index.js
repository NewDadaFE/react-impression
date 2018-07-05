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
      loading: loading === undefined ? false : loading,
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
    full: true,
  }

  componentWillReceiveProps(props) {
    if (props.loading !== this.props.loading) {
      this.setState({
        loading: props.loading,
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.full) return
    if (!prevState.loading && this.state.loading) {
      this.disableScroll()
    } else if (prevState.loading && !this.state.loading) {
      this.enableScroll()
    }
  }

  getClass() {
    let classMap = {
      'loading-container': true,
    }

    if (this.props.full && this.state.loading) {
      classMap['full-screen'] = true
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

  show() {
    _startDate = new Date()
    this.setState({
      loading: true,
    })
  }

  hide() {
    _endDate = new Date()
    if (_endDate - _startDate < _duration) {
      setTimeout(() => {
        this.setState({
          loading: false,
        })
      }, _duration - (_endDate - _startDate))

      return
    }

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

Loading.show = ref => {
  // 如果不传ref 一个页面中有多个Loading实例，_loading = this会等于最后一个创建的实例，导致调用结果跟预期不一致，所以多个实例要传ref
  if (!ref) return _loading.show()
  return ref.show()
}

Loading.hide = ref => {
  if (!ref) return _loading.hide()
  return ref.hide()
}
