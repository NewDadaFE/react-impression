import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import LoadingAddon from '../LoadingAddon'

let _loading,
  _startDate,
  _endDate,
  _duration = 1000

/**
 * Loading组件.
 */
export default class Loading extends PureComponent {
  /**
   * 初始信息.
   */
  constructor(props, context) {
    super(props, context)
    _loading = this

    props.duration && (_duration = props.duration)
    this.state = {
      show: false,
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
  }
  // 默认props
  static defaultProps = {
    type: 'cyclone',
    closeable: false,
    loadingMsg: '加载中',
  }
  /**
   * 关闭loading.
   */
  hideHandle = () => {
    let { closeable } = this.props

    closeable &&
      this.setState({
        show: false,
      })
  }
  // 渲染
  render() {
    let { type, loadingMsg, className } = this.props,
      { show } = this.state

    return (
      <div
        className={classnames('loading-mask', { invisible: !show }, className)}
        onClick={this.hideHandle}
      >
        <LoadingAddon type={type} show={show} loadingMsg={loadingMsg} />
      </div>
    )
  }
}

Loading.Addon = LoadingAddon
Loading.show = () => {
  _startDate = new Date()
  _loading.setState({
    show: true,
  })
}

Loading.hide = () => {
  _endDate = new Date()
  if (_endDate - _startDate < _duration) {
    setTimeout(() => {
      _loading.setState({
        show: false,
      })
    }, _duration - (_endDate - _startDate))

    return
  }

  _loading.setState({
    show: false,
  })
}
