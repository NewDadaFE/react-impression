import classnames from 'classnames'
import React, { PureComponent } from 'react'
import { Button } from 'react-impression'
import propTypes from './propTypes'

// 获取小图标
const getAddonByType = type => {
  switch (type) {
    case 'danger':
      return 'fa-exclamation-circle text-danger'
    case 'success':
      return 'fa-check-circle text-success'
    case 'info':
      return 'fa-check-circle text-info'
    case 'warning':
      return 'fa-check-circle text-warning'
    default:
      return 'fa-exclamation-triangle text-warning'
  }
}

/**
 * Alert 组件
 */
export default class Alert extends PureComponent {
  // props 校验
  static propTypes = propTypes
  // 默认props
  static defaultProps = {
    type: 'info',
    btnText: '确定',
    visible: false,
  }

  componentWillUnmount() {
    if (this.props.visible) {
      this.enableScroll()
    }
  }

  documentBody() {
    return document.body
  }

  disableScroll() {
    const documentBody = this.documentBody()
    if (documentBody) {
      documentBody.style.setProperty('overflow', 'hidden')
    }
  }

  enableScroll() {
    const documentBody = this.documentBody()
    if (documentBody) {
      documentBody.style.removeProperty('overflow')
    }
  }

  render() {
    let {
        type,
        btnText,
        onClick,
        className,
        children,
        visible,
        ...others
      } = this.props,
      iconTypeClass = getAddonByType(type)

    if (!visible) {
      this.enableScroll()
      return null
    } else {
      this.disableScroll()
    }

    return (
      <div className={classnames('alert', className)}>
        <div {...others} className='alert-dialog'>
          {type !== 'none' && (
            <div className='alert-addon'>
              <i className={classnames('fa', iconTypeClass)} />
            </div>
          )}
          <div className='alert-body'>{children}</div>
          <div className='alert-footer' onClick={onClick}>
            <Button theme='primary'>{btnText}</Button>
          </div>
        </div>
      </div>
    )
  }
}
