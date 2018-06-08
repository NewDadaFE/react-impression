import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * Notice组件.
 */
export default class Notice extends PureComponent {
  // prop type校验
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    // 类型
    theme: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
    // 标题
    title: PropTypes.string,
    // 内容
    message: PropTypes.string,
    // 关闭
    close: PropTypes.func,
    // 是否可关闭
    closeable: PropTypes.bool,
  }
  // 默认props
  static defaultProps = {
    theme: 'info',
    title: '通知',
  }
  /**
   * 获取信息图标.
   * @return {[type]} [description]
   */
  getTitleIcon() {
    let { theme } = this.props

    return {
      info: ['fa', 'fa-volume-up'],
      success: ['fa', 'fa-check-circle'],
      warning: ['fa', 'fa-exclamation-triangle'],
      danger: ['fa', 'fa-times-circle'],
    }[theme]
  }
  /**
   * 渲染.
   */
  render() {
    let {
        title,
        message,
        theme,
        closeable,
        close,
        children,
        className,
      } = this.props,
      themeClass = `notice-${theme}`,
      iconClass = this.getTitleIcon()

    return (
      <div className={classnames('notice', themeClass, className)}>
        <div className='notice-header'>
          <i className={classnames(iconClass)} />
        </div>
        <div className='notice-body'>
          <div className='notice-title'>
            {title}
            {closeable && (
              <button type='button' className='close' onClick={close}>
                <i className='fa fa-times-circle' />
              </button>
            )}
          </div>
          <div className='notice-content'>{message || children}</div>
        </div>
      </div>
    )
  }
}
