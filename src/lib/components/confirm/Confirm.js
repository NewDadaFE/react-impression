import classnames from 'classnames'
import React, { PureComponent } from 'react'
import { Button } from 'react-impression'
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
    // 是否显示
    visible: PropTypes.bool,
  }
  // 默认props
  static defaultProps = {
    type: 'warning',
    okText: '确定',
    cancelText: '取消',
    visible: false,
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
        visible,
        ...others
      } = this.props,
      iconTypeClass = this.getAddonByType(type)

    if (!visible) {
      document.body.style.overflow = ''
      return null
    } else {
      document.body.style.overflow = 'hidden'
    }

    return (
      <div className={classnames('confirm', className)}>
        <div {...others} className='confirm-dialog'>
          <div className='confirm-addon'>
            <i className={classnames('fa', iconTypeClass)} />
          </div>
          <div className='confirm-body'>{children}</div>
          <div className='confirm-footer'>
            <Button theme='default' onClick={onCancelClick}>
              {cancelText}
            </Button>
            <Button theme='primary' onClick={onOkClick}>
              {okText}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
