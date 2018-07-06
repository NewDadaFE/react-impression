import classnames from 'classnames'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Notice from '../Notice'

// Notification组件引用
let _notification

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
    { title, message, duration = 2000, closeable = this.props.closeable },
    theme
  ) {
    let key = this.key++,
      state = { ...this.state }

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
  /**
   * 渲染.
   */
  render() {
    let { className } = this.props

    return (
      <div className={classnames('notification', className)}>
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
