import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

let _message
let _timers = []

export default class Message extends React.Component {
  constructor(props, context) {
    super(props, context)
    _message = this

    this.state = {
      show: props.show || false,
      message: null,
      theme: props.theme,
      closable: false,
    }
  }

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
    const { theme } = this.state

    return {
      info: ['fa', 'fa-info-circle'],
      success: ['fa', 'fa-check-circle'],
      warning: ['fa', 'fa-exclamation-triangle'],
      danger: ['fa', 'fa-times-circle'],
      loading: ['message-icon-loading'],
    }[theme]
  }

  /**
   * 获取主题样式
   * @returns {*}
   */
  getStyleClass() {
    const { theme } = this.state

    return {
      info: 'message-primary',
      warning: 'message-warning',
      success: 'message-success',
      danger: 'message-danger',
      loading: 'message-default',
    }[theme]
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  render() {
    const { className } = this.props
    const { message, show, closable } = this.state
    const themeClass = this.getStyleClass()
    const iconClass = this.getTitleIcon()

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
              {closable && (
                <div className='message-close' onClick={this.handleClose}>
                  关闭
                </div>
              )}
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
 * @param closable
 */
const showMessage = (theme, message, duration = 2000, closable) => {
  // 清空隐藏消息定时器
  _timers.forEach(timer => clearTimeout(timer))
  _timers = []

  _message.setState({
    show: true,
    theme,
    message,
    duration,
    closable,
  })

  // 隐藏消息
  duration > 0 && hideMessage(duration)
}

/**
 * 显示info信息
 * @param message
 * @param duration
 * @param closable
 */
Message.info = (message, duration, closable) => {
  showMessage('info', message, duration, closable)
}

/**
 * 显示success信息
 * @param message
 * @param duration
 * @param closable
 */
Message.success = (message, duration, closable) => {
  showMessage('success', message, duration, closable)
}

/**
 * 显示warning信息
 * @param message
 * @param duration
 * @param closable
 */
Message.warning = (message, duration, closable) => {
  showMessage('warning', message, duration, closable)
}

/**
 * 显示error信息
 * @param message
 * @param duration
 * @param closable
 */
Message.error = (message, duration, closable) => {
  showMessage('danger', message, duration, closable)
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
