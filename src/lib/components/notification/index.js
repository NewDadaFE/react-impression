import classnames from 'classnames'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Notice from './Notice'
import Portal from '../../utils/Portal'

const IS_REACT_16 = 'createPortal' in ReactDOM

// Notification组件引用
let _notification
// 默认参数
let defaultTop = 20
let defaultBottom = 20
let defaultDuration = 2000
// PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
let defaultPlace = 'topRight'
let defaultGetContainer

/**
 * 通知容器.
 */
export default class Notification extends Component {
  /**
   * 初始化信息.
   * @param  {[type]} props   [description]
   * @param  {[type]} context [description]
   */
  constructor(props, context) {
    super(props, context)

    this.state = {}
    this.key = 0
    this.timers = []
    _notification = this
  }

  // prop type校验
  static propTypes = {
    className: PropTypes.string,
    // 是否可关闭
    closeable: PropTypes.bool,
  }

  // 默认props
  static defaultProps = {
    closeable: true,
  }

  // 根据place获取style
  getPlaceStyle(placement) {
    let style
    switch (placement) {
      case 'topLeft':
        style = {
          left: 0,
          top: defaultTop,
          bottom: 'auto',
        }
        break
      case 'topRight':
        style = {
          right: 0,
          top: defaultTop,
          bottom: 'auto',
        }
        break
      case 'bottomLeft':
        style = {
          left: 0,
          top: 'auto',
          bottom: defaultBottom,
        }
        break
      default:
        style = {
          right: 0,
          top: 'auto',
          bottom: defaultBottom,
        }
        break
    }
    return style
  }
  /**
   * 移除定时器.
   */
  componentWillUnmount() {
    this.timers.forEach(timer => {
      clearTimeout(timer)
    })
  }
  /**
   * 添加通知.
   * @param {[String]} options.title    [标题]
   * @param {[String]} options.message  [内容]
   * @param {Number}   options.duration [延时]
   */
  addNotice(
    {
      title,
      message,
      duration = defaultDuration,
      place,
      closeable = this.props.closeable,
    },
    theme
  ) {
    let key = this.key++,
      state = { ...this.state }

    if (place !== undefined) {
      defaultPlace = place
    }

    state[key] = {
      title,
      message,
      theme,
      closeable,
    }
    this.setState(state)
    this.timeToRemoveNotice(key, duration)
  }
  /**
   * 移除通知.
   * @param  {[Number]} key      [索引]
   */
  removeNotice = key => {
    delete this.state[key]
    this.setState(this.state)
  }
  /**
   * 移除通知.
   * @param  {[Number]} key      [索引]
   * @param  {[Number]} duration [延时]
   */
  timeToRemoveNotice(key, duration) {
    this.timers.push(
      setTimeout(() => {
        this.removeNotice(key)
      }, duration)
    )
  }

  getComponent() {
    let { className } = this.props
    const prefixCls = 'notification'
    const place = defaultPlace

    return (
      <div
        className={classnames(prefixCls, `${prefixCls}-${place}`, className)}
        style={this.getPlaceStyle(place)}
      >
        <ReactCSSTransitionGroup
          component='div'
          transitionName='notice'
          transitionEnterTimeout={200}
          transitionLeaveTimeout={800}
        >
          {Object.keys(this.state).map(key => (
            <Notice
              key={key}
              theme={this.state[key].theme}
              closeable={this.state[key].closeable}
              title={this.state[key].title}
              close={() => this.removeNotice(key)}
            >
              {this.state[key].message}
            </Notice>
          ))}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  getContainer = () => {
    const container = document.createElement('div')
    const getContainer = defaultGetContainer

    if (getContainer) {
      getContainer.appendChild(container)
    } else {
      document.body.appendChild(container)
    }
    return container
  }

  /**
   * 渲染.
   */
  render() {
    if (IS_REACT_16) {
      return (
        <Portal getContainer={this.getContainer}>{this.getComponent()}</Portal>
      )
    }

    return <div>{this.getComponent()}</div>
  }
}

// 添加一条info消息
Notification.info = options => {
  _notification.addNotice(options, 'info')
}

// 添加一条success消息
Notification.success = options => {
  _notification.addNotice(options, 'success')
}

// 添加一条warning消息
Notification.warning = options => {
  _notification.addNotice(options, 'warning')
}

// 添加一条danger消息
Notification.error = options => {
  _notification.addNotice(options, 'danger')
}
// Notification config
Notification.config = options => {
  const { duration, place, bottom, top, getContainer } = options

  if (duration !== undefined) {
    defaultDuration = duration
  }
  if (place !== undefined) {
    defaultPlace = place
  }
  if (bottom !== undefined) {
    defaultBottom = bottom
  }
  if (top !== undefined) {
    defaultTop = top
  }
  if (getContainer !== undefined) {
    defaultGetContainer = getContainer
  }
}
