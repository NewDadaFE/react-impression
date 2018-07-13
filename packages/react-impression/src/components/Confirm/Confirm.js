import classnames from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
/**
 * Confirm组件.
 */
export default class Confirm extends PureComponent {
  // props校验
  static propTypes = {
    children: PropTypes.any,
    // 自定义样式
    className: PropTypes.string,
    // 类型
    type: PropTypes.string,
    // 确定按钮
    okText: PropTypes.string,
    // 取消按钮
    cancelText: PropTypes.string,
    // 确定按钮点击
    onOkClick: PropTypes.func,
    // 取消按钮点击
    onCancelClick: PropTypes.func,
  }
  // 默认props
  static defaultProps = {
    type: 'warning',
    okText: '确定',
    cancelText: '取消',
  }
  /**
   * 根据类型获取Icon.
   * @return {[String]} [Icon类型]
   */
  getAddonByType = type => {
    switch (type) {
      case 'info':
        return 'fa-question-circle text-primary'
      case 'danger':
        return 'fa-exclamation-circle text-danger'
      default:
        return 'fa-exclamation-circle text-warning'
    }
  }
  // 渲染
  render() {
    let {
        type,
        okText,
        cancelText,
        onOkClick,
        onCancelClick,
        className,
        children,
        ...others
      } = this.props,
      iconTypeClass = this.getAddonByType(type)

    return (
      <div className={classnames('confirm', className)}>
        <div {...others} className='confirm-dialog'>
          <div className='confirm-addon'>
            <i className={classnames('fa', iconTypeClass)} />
          </div>
          <div className='confirm-body'>{children}</div>
          <div className='confirm-footer'>
            <div className='confirm-btn-sure' onClick={onOkClick}>
              {okText}
            </div>
            <div className='confirm-btn-cancel' onClick={onCancelClick}>
              {cancelText}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
