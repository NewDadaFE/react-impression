/* eslint-disable react/jsx-no-bind */
import classnames from 'classnames'
import React, { PureComponent } from 'react'
import { Button } from 'react-impression'
import propTypes from './propTypes'
import KeyCode from '../../utils/keyCode'

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

  onKeyDown(e) {
    const { keyboard, onCancelClick } = this.props
    if (keyboard && e.keyCode === KeyCode.ESC) {
      onCancelClick && onCancelClick(e)
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

    delete others.keyboard

    if (!visible) {
      document.body.style.overflow = ''
      return null
    } else {
      document.body.style.overflow = 'hidden'
    }

    return (
      <div
        ref={this.getWrap}
        className={classnames('confirm', className)}
        tabIndex={-1}
        onKeyDown={this.onKeyDown.bind(this)}
      >
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
