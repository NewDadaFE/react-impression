import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * Notice组件.
 */
export default class Notice extends PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,
    /**
     * 子组件
     */
    children: PropTypes.node,
    /**
     * 类型
     */
    theme: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
    /**
     * 标题
     */
    title: PropTypes.string,
    /**
     * 内容
     */
    message: PropTypes.string,
    /**
     * 关闭按钮点击事件回调
     */
    close: PropTypes.func,
    /**
     * 是否显示关闭按钮
     */
    closeable: PropTypes.bool,
    /**
     * 鼠标移入事件回调
     */
    onMouseEnter: PropTypes.func,
  }

  static defaultProps = {
    theme: 'info',
    title: '通知',
  }

  /**
   * 获取图标样式
   * @return Array 图标样式
   */
  getTitleIcon() {
    const themeMap = {
      info: ['fa', 'fa-info-circle'],
      success: ['fa', 'fa-check-circle'],
      warning: ['fa', 'fa-exclamation-triangle'],
      danger: ['fa', 'fa-times-circle'],
    }

    return themeMap[this.props.theme]
  }

  render() {
    const iconClass = this.getTitleIcon()

    return (
      <div
        className={classnames(
          'notice',
          `notice-${this.props.theme}`,
          this.props.className
        )}
        onMouseEnter={this.props.onMouseEnter}
      >
        <div className='notice-header'>
          <i className={classnames(iconClass)} />
        </div>
        <div className='notice-body'>
          {this.props.closeable && (
            <button type='button' className='close' onClick={this.props.close}>
              &times;
            </button>
          )}
          <div className='notice-title'>{this.props.title}</div>
          <div className='notice-content'>
            {this.props.message || this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
