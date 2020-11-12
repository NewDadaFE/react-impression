import classNames from 'classnames'
import React, { forwardRef, useCallback } from 'react'
import PropTypes from 'prop-types'

const TabPane = forwardRef((props, ref) => {
  const {
    disabled,
    active,
    eventKey,
    className,
    children,
    navSliderStyle,
    onClick,
    ...others
  } = props

  const onClickHandle = useCallback(
    event => {
      !disabled && !active && onClick && onClick(eventKey, event)
    },
    [disabled, active, onClick, eventKey]
  )
  const childClass = {
    disabled,
    active,
  }

  return (
    <div
      {...others}
      className={classNames('dada-tab-pane', className, childClass)}
      ref={ref}
      onClick={onClickHandle}
    >
      <div className='dada-tab-pane-text'>{children}</div>
    </div>
  )
})

TabPane.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.node,
  /**
   * 自定义样式
   */
  className: PropTypes.string,
  /**
   * 是否可以选中
   */
  disabled: PropTypes.bool,
  /**
   * 是否为激活状态，仅eventKey有值时有效
   */
  active: PropTypes.bool,
  /**
   * 事件关键字
   */
  eventKey: PropTypes.any,
  /**
   * 点击回调函数，参数列表：eventKey，event
   */
  onClick: PropTypes.func,
}

TabPane.defaultProps = {
  disabled: false,
  active: false,
}

export default TabPane
