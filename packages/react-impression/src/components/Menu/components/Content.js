import React, { useState, useContext, useRef } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  PORTAL_DEFAULT_STYLE,
  MENUITEM_PROP_TYPES,
  MENUITEM_DEFAULT_PROPS,
} from '../constants'
import Ico from '../../Ico'
import MenuContext from './MenuContext'

const getMenuLogo = (iconType, img) => {
  if (img) {
    return <img className='logo' src={img} />
  } else {
    return <Ico className='logo' type={iconType} />
  }
}

const isActive = (value, parentValue, valuePath) => {
  const idx = valuePath.indexOf(value)
  if (idx !== -1) {
    const result = valuePath.slice(0, idx).join('/')
    return result === parentValue
  }
  return false
}

function SubMenu({ value, parentValue, iconType, img, title, children }) {
  const {
    bgColor,
    valuePath,
    collapsed,
    defaultOpenAll,
    defaultOpenValues,
  } = useContext(MenuContext)
  const [folded, setFolded] = useState(
    !(defaultOpenAll || defaultOpenValues.includes(value))
  )
  const [floating, setFloating] = useState(false)
  const [boundingRect, setBoundingRect] = useState({})
  const mouseTimeout = useRef()

  const getSubmenuContent = isFloating => {
    const contentClass = classnames({
      'menu-floating': floating,
      'menu-submenu-content': true,
      'menu-floating-hidden': !floating && isFloating,
      'menu-folded-hidden': (folded || collapsed) && !isFloating,
    })
    let contentStyle = {}
    if (floating) {
      const { left = 0, top = 0, width = 0 } = boundingRect
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop || 0
      const topReal = Number(scrollTop) + Number(top)
      contentStyle = {
        left: Number(left) + Number(width),
        top: topReal,
        backgroundColor: bgColor,
      }
    }

    const newChildren = React.Children.map(children, child => {
      return React.cloneElement(child, {
        parentValue: parentValue ? `${parentValue}/${value}` : value,
      })
    })

    return (
      <div
        style={contentStyle}
        className={classnames(contentClass)}
        onMouseEnter={onContentMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {newChildren}
      </div>
    )
  }

  const onSwitchChange = () => {
    setFolded(!folded)
  }

  const onItemMouseEnter = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    setBoundingRect(rect)

    if (!collapsed) return
    setFloating(true)
  }

  const onMouseLeave = () => {
    if (!collapsed) return
    mouseTimeout.current = setTimeout(() => {
      floating && setFloating(false)
    }, 200)
  }

  const onContentMouseEnter = () => {
    if (!collapsed) return
    clearTimeout(mouseTimeout.current)
    setFloating(true)
  }

  if (!title) return null
  return (
    <div
      className='menu-submenu'
      key={value}
      data-value={value}
      data-parent-value={parentValue}
    >
      <div
        className={classnames('menu-submenu-item', {
          active: isActive(value, parentValue, valuePath),
        })}
        onClick={onSwitchChange}
        onMouseEnter={onItemMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {getMenuLogo(iconType, img)}
        <div className='title menu-submenu-item__title'>{title}</div>
        <Ico
          className={classnames('switch', {
            'switch-up': !folded && !collapsed,
          })}
          type={collapsed ? 'angle-right' : 'angle-down'}
        />
      </div>
      {getSubmenuContent(false)}
      {createPortal(
        <div style={PORTAL_DEFAULT_STYLE}>
          <div>{getSubmenuContent(true)}</div>
        </div>,
        window.document.getElementsByTagName('body')[0]
      )}
    </div>
  )
}

SubMenu.propTypes = {
  ...MENUITEM_PROP_TYPES,
  /**
   * 子组件
   * @ignore
   */
  children: PropTypes.node,
}

SubMenu.defaultProps = MENUITEM_DEFAULT_PROPS

function MenuItem({ value, parentValue, title, iconType, img }) {
  const { valuePath, collapsed, onMenuItemClick } = useContext(MenuContext)

  const initMenuItem = () => (
    <div
      className={classnames('menu-item', {
        active: isActive(value, parentValue, valuePath),
      })}
      key={value}
      data-value={value}
      data-parent-value={parentValue}
      onClick={onMenuItemClick}
    >
      {getMenuLogo(iconType, img)}
      <div className='title menu-item__title'>{title}</div>
    </div>
  )

  if (!title) return null
  if (!parentValue && collapsed) {
    return (
      <Tooltip content={title} position='right'>
        {initMenuItem()}
      </Tooltip>
    )
  }
  return initMenuItem()
}

MenuItem.propTypes = MENUITEM_PROP_TYPES

MenuItem.defaultProps = MENUITEM_DEFAULT_PROPS

export { SubMenu, MenuItem }
