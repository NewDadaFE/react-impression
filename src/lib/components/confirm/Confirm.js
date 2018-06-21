import classnames from 'classnames'
import React, { PureComponent } from 'react'
import { Button } from 'react-impression'
import propTypes from './propTypes'
/**
 * Confirm组件.
 */
export default class Confirm extends PureComponent {
  // props校验
  static propTypes = propTypes
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
