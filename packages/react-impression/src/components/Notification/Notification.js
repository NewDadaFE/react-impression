import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Notice from '../Notice'

let _notification

export default class Notification extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {}
    this.key = 0
    this.timers = []
    _notification = this
  }

  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 是否可关闭
     */
    closeable: PropTypes.bool,
  }

  static defaultProps = {
    closeable: true,
  }

  /**
   * 移除定时器
   */
  componentWillUnmount() {
    this.timers.forEach(timer => {
      clearTimeout(timer)
    })
  }

  /**
   * 添加通知
   * @param title
   * @param message
   * @param duration {number} [duration=2000] - 通知显示时长，单位ms.
   * @param closeable
   * @param theme
   */
  addNotice(
    { title, message, duration = 2000, closeable = this.props.closeable },
    theme
  ) {
    const key = this.key++
    const state = { ...this.state }

    state[key] = {
      title,
      message,
      theme,
      closeable,
      duration,
    }
    this.setState(state)
    this.timeToRemoveNotice(key, duration)
  }

  /**
   * 鼠标移开时当前元素仍然设置在计时器后自动消失
   * @param key
   * @param duration
   * @constructor
   */
  TimeToRemoveCurrentTimer(key, duration) {
    this.timers[key] = setTimeout(() => {
      this.removeNotice(key)
    }, duration)
  }

  /**
   * 移除通知
   * @param key
   */
  removeNotice = key => {
    delete this.state[key]
    this.setState(this.state)
  }

  /**
   * 移除通知
   * @param key
   * @param duration
   */
  timeToRemoveNotice(key, duration) {
    this.timers.push(
      setTimeout(() => {
        this.removeNotice(key)
      }, duration)
    )
  }

  /***
   * 鼠标悬停时，计时器清除，让提示不消失
   * @param key
   */
  handleClearTimer = key => {
    const stateData = this.state[key]
    if (stateData) {
      clearTimeout(this.timers[key])
    }
  }

  render() {
    const { className } = this.props

    return (
      <div className={classnames('notification', className)}>
        <TransitionGroup>
          {Object.keys(this.state).map(key => (
            <CSSTransition
              key={key}
              classNames='notice'
              timeout={{ exit: 800, enter: 200 }}
            >
              <Notice
                theme={this.state[key].theme}
                closeable={this.state[key].closeable}
                title={this.state[key].title}
                close={() => this.removeNotice(key)}
                onMouseEnter={() => this.handleClearTimer(key)}
                onMouseLeave={() => {
                  this.state[key] &&
                    this.TimeToRemoveCurrentTimer(key, this.state[key].duration)
                }}
              >
                {this.state[key].message}
              </Notice>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    )
  }
}

/**
 * 添加一条info消息
 * @param options
 */
Notification.info = options => {
  _notification.addNotice(options, 'info')
}

/**
 * 添加一条success消息
 * @param options
 */
Notification.success = options => {
  _notification.addNotice(options, 'success')
}

/**
 * 添加一条warning消息
 * @param options
 */
Notification.warning = options => {
  _notification.addNotice(options, 'warning')
}

/**
 * 添加一条danger消息
 * @param options
 */
Notification.error = options => {
  _notification.addNotice(options, 'danger')
}
