import classnames from 'classnames'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// Message组件引用
let _message,
  _timers = []

export default class Message extends Component {
  constructor(props, context) {
    super(props, context)
    _message = this

    this.state = {
      show: props.show || false,
      message: null,
      theme: props.theme,
    }
  }
  // prop type校验
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 是否显示
     */
    show: PropTypes.bool,
    /**
     * 类型
     */
    theme: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'loading']),
  }
  // 默认props
  static defaultProps = {
    theme: 'info',
  }
  /**
   * 移除定时器
   */
  componentWillUnmount() {
    _timers.forEach(timer => clearTimeout(timer))
  }

  /**
   * 获取信息图标
   * @returns {*}
   */
  getTitleIcon() {
    let { theme } = this.state

    return {
      info: ['fa', 'fa-volume-up'],
      success: ['fa', 'fa-check-circle'],
      warning: ['fa', 'fa-exclamation-triangle'],
      danger: ['fa', 'fa-times-circle'],
      loading: ['message-loading'],
    }[theme]
  }

  /**
   * 获取主题样式
   * @returns {*}
   */
  getStyleClass() {
    let { theme } = this.state

    return {
      info: 'message-primary',
      warning: 'message-warning',
      success: 'message-success',
      danger: 'message-danger',
      loading: 'message-primary',
    }[theme]
  }

  /**
   * 渲染
   * @returns {boolean}
   */
  render() {
    let { className } = this.props,
      { message, show } = this.state,
      themeClass = this.getStyleClass(),
      iconClass = this.getTitleIcon()

    return (
      <div>
        <ReactCSSTransitionGroup
          component='div'
          transitionName='message'
          transitionEnterTimeout={240}
          transitionLeaveTimeout={360}
        >
          {show && (
            <div className={classnames('message', themeClass, className)}>
              <div className='message-header'>
                <i className={classnames(iconClass)} />
              </div>
              <div className='message-body'>{message}</div>
            </div>
          )}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

/**
 * 隐藏消息
 * @param duration
 */
const hideMessage = duration => {
  _timers.push(
    setTimeout(() => {
      _message.setState({
        show: false,
      })
    }, duration)
  )
}

/**
 * 显示消息
 * @param theme
 * @param message
 * @param duration
 */
const showMessage = (theme, message, duration = 2000) => {
  // 清空隐藏消息定时器
  _timers.forEach(timer => clearTimeout(timer))
  _timers = []

  _message.setState({
    show: true,
    theme,
    message,
    duration,
  })

  // 隐藏消息
  duration > 0 && hideMessage(duration)
}

/**
 * 显示info信息
 * @param message
 * @param duration
 */
Message.info = (message, duration) => {
  showMessage('info', message, duration)
}

/**
 * 显示success信息
 * @param message
 * @param duration
 */
Message.success = (message, duration) => {
  showMessage('success', message, duration)
}

/**
 * 显示warning信息
 * @param message
 * @param duration
 */
Message.warning = (message, duration) => {
  showMessage('warning', message, duration)
}

/**
 * 显示error信息
 * @param message
 * @param duration
 */
Message.error = (message, duration) => {
  showMessage('danger', message, duration)
}

/**
 * 显示loading信息
 * @param message
 */
Message.loading = message => {
  showMessage('loading', message, 0)
}

/**
 * 隐藏信息
 */
Message.hideMessage = () => {
  hideMessage(0)
}
