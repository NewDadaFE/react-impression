/* eslint-disable react/jsx-no-bind */
import classnames from 'classnames'
import React, { PureComponent } from 'react'
import { Button } from 'react-impression'
import propTypes from './propTypes'
import KeyCode from '../../utils/keyCode'

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

  componentDidUpdate(prevProps) {
    if (!prevProps.visible && this.props.visible) {
      this.wrap.focus()
    }
  }

  /*
  * 如果是Protal类型的wrapper，外部组件第一次visible变化不会触发内部组件update，所以在componentDidMount去触发focus
  * if (visible || this._component) {
      portal = (
        <Portal getContainer={this.getContainer}>{this.getComponent()}</Portal>
      )
    }
  * */
  componentDidMount() {
    if (this.props.visible) {
      this.wrap.focus()
    }
  }

  getWrap = ref => {
    this.wrap = ref
  }

  onKeyDown(e) {
    const { keyboard, onClick } = this.props
    if (keyboard && e.keyCode === KeyCode.ESC) {
      onClick && onClick(e)
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

    delete others.keyboard

    if (!visible) {
      this.enableScroll()
      return null
    } else {
      this.disableScroll()
    }

    return (
      <div
        className={classnames('alert', className)}
        ref={this.getWrap}
        tabIndex={-1}
        onKeyDown={this.onKeyDown.bind(this)}
      >
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
