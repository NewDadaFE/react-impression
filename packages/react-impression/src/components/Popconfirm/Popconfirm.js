import React, { useEffect, useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Trigger from '../Trigger'
import Button from '../Button'

Popconfirm.propTypes = {
  /**
   * 自定义弹出层样式
   */
  className: PropTypes.string,
  /**
   * 显示位置
   */
  position: PropTypes.oneOf([
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'left',
  ]).isRequired,
  /**
   * 内容
   */
  content: PropTypes.node,
  /**
   * 子组件
   */
  children: PropTypes.element.isRequired,
  /**
   * 确定按钮文案
   */
  okText: PropTypes.string,
  /**
   * 确定按钮属性
   */
  okButtonProps: PropTypes.object,
  /**
   * 确定事件回调
   */
  onOk: PropTypes.func,
  /**
   * 取消按钮文案
   */
  cancelText: PropTypes.string,
  /**
   * 取消按钮属性
   */
  cancelButtonProps: PropTypes.object,
  /**
   * 取消事件回调
   */
  onCancel: PropTypes.func,
  /**
   * 手动控制气泡弹出显示
   */
  visible: PropTypes.bool,
  /**
   * 禁用
   */
  disabled: PropTypes.bool,
}

Popconfirm.defaultProps = {
  position: 'top',
  okText: '确定',
  cancelText: '取消',
  disabled: false,
}

function Popconfirm(props) {
  const {
    className,
    children,
    position,
    content,
    okText,
    okButtonProps,
    onOk,
    cancelText,
    cancelButtonProps,
    onCancel,
    visible,
    disabled,
    ...others
  } = props

  const [popupVisible, setPopupVisible] = useState(false)

  // 是否为自定义控制显示/隐藏
  const isCustomVisible = useMemo(
    () => {
      return visible !== undefined
    },
    [visible]
  )

  // 弹出层触发模式
  const triggerMode = useMemo(
    () => {
      if (isCustomVisible || disabled) return 'none'
      return 'click'
    },
    [isCustomVisible, disabled]
  )

  // 同步弹出层显示隐藏状态
  const onPopupVisibleChange = useCallback(newVisible => {
    setPopupVisible(newVisible)
  }, [])

  // 同步自定义弹出层显示/隐藏状态
  useEffect(
    () => {
      if (disabled) return
      setPopupVisible(!!visible)
    },
    [visible, disabled]
  )

  return (
    <Trigger
      showAction={triggerMode}
      hideAction={triggerMode}
      placement={position}
      popup={
        <div className='dada-popconfirm-popup'>
          <div className='dada-popconfirm-content'>{content}</div>
          <div className='dada-popconfirm-btns'>
            <Button
              size='xs'
              theme='secondary'
              onClick={() => {
                onCancel && onCancel()
                if (!isCustomVisible) {
                  setPopupVisible(false)
                }
              }}
              {...cancelButtonProps}
            >
              {cancelText}
            </Button>
            <Button
              size='xs'
              theme='primary'
              onClick={() => {
                onOk && onOk()
                if (!isCustomVisible) {
                  setPopupVisible(false)
                }
              }}
              {...okButtonProps}
            >
              {okText}
            </Button>
          </div>
        </div>
      }
      stretch='auto'
      popupClassName={classNames('dada-popconfirm', className)}
      transitionName='zoom'
      popupVisible={popupVisible}
      onPopupVisibleChange={onPopupVisibleChange}
      outsideDisabled={isCustomVisible}
      arrowVisible
      {...others}
    >
      {children}
    </Trigger>
  )
}

export default Popconfirm
