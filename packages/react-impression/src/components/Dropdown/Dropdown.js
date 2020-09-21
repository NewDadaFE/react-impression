import classnames from 'classnames'
import React, { useState, useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import DropdownTrigger from '../DropdownTrigger'
import DropdownMenu from '../DropdownMenu'
import DropdownMenuItem from '../DropdownMenuItem'
import DropdownMenuDivider from '../DropdownMenuDivider'
import { addEventListener, contains } from '../../utils/system'

export default function Dropdown(props) {
  const [active, setActive] = useState(
    undefined === props.active ? false : props.active
  )
  const toggleOptionsHandle = useCallback(
    flag => {
      setActive(typeof flag === 'boolean' ? flag : !active)
    },
    [active]
  )
  const referenceElement = useRef(null)
  /**
   * 隐藏弹出层
   */
  const hidePopupHandler = useCallback(
    event => {
      if (!contains(referenceElement.current, event.target)) {
        setActive(false)
      }
    },
    [referenceElement]
  )
  useEffect(
    () => {
      let clickOutsideHandler = addEventListener(
        window.document,
        'mousedown',
        hidePopupHandler
      )
      return () => {
        clickOutsideHandler.remove()
        clickOutsideHandler = null
      }
    },
    [hidePopupHandler]
  )
  const { trigger, className, disabled, ...others } = props
  let { children } = props

  children = React.Children.map(children, child => {
    if (!child) {
      return child
    }
    let childProp = {
      trigger,
      toggleMenu: toggleOptionsHandle,
    }
    disabled && (childProp.disabled = true)
    return React.cloneElement(child, childProp)
  })

  if (trigger === 'hover') {
    others.onMouseOver = () => toggleOptionsHandle(true)
    others.onMouseOut = () => toggleOptionsHandle(false)
  }

  delete others.active

  return (
    <div
      {...others}
      className={classnames('dropdown', { active }, className)}
      ref={referenceElement}
    >
      {children}
    </div>
  )
}
Dropdown.propTypes = {
  /**
   * 是否激活
   */
  active: PropTypes.bool,

  /**
   * 触发动作
   */
  trigger: PropTypes.oneOf(['click', 'hover']),

  /**
   * 子组件
   */
  children: PropTypes.array.isRequired,

  /**
   * 自定义样式
   */
  className: PropTypes.string,

  /**
   * 禁用状态
   */
  disabled: PropTypes.bool,
}
Dropdown.defaultProps = {
  active: false,
  trigger: 'click',
}
Dropdown.Trigger = DropdownTrigger
Dropdown.Menu = DropdownMenu
Dropdown.MenuItem = DropdownMenuItem
Dropdown.MenuDivider = DropdownMenuDivider
