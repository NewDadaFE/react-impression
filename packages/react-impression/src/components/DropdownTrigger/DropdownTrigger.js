import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Ico from '../Ico'

const DropdownTrigger = ({
  trigger,
  toggleMenu,
  className,
  children,
  disabled,
  ...others
}) => {
  let options = {}
  disabled && (options.disabled = true)
  if (trigger === 'click') {
    options.onClick = toggleMenu
  }

  children = React.cloneElement(
    children,
    options,
    <span>
      {children.props.children}
      <Ico className='dropdown-caret offset-l-xxs' right type='angle-down' />
    </span>
  )

  return (
    <span {...others} className={classnames('dropdown-toggle', className)}>
      {children}
    </span>
  )
}

DropdownTrigger.propTypes = {
  /**
   * 子组件
   */
  children: PropTypes.element.isRequired,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 触发方式
   */
  trigger: PropTypes.oneOf(['click', 'hover']),

  /**
   * 切换回调
   */
  toggleMenu: PropTypes.func,
}

export default DropdownTrigger
