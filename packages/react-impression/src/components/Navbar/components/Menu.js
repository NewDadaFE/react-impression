import React, { useCallback, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Ico from '../../Ico'
import Trigger from '../../Trigger'
import { getValuePathsByTarget } from '../util'

function Menu({ dataSource, menuValue, onChange }) {
  const [hoverValue, setHoverValue] = useState(null)

  const valuePaths = useMemo(
    () => {
      return getValuePathsByTarget(dataSource, menuValue)
    },
    [dataSource, menuValue]
  )

  const onMenuClick = data => {
    const paths = getValuePathsByTarget(dataSource, data.value)
    onChange(data.value, data, paths)
  }

  const getMenuInfo = useCallback(
    ({ data, isChild }) => (
      <div
        className={classNames('menu-info')}
        onClick={() => onMenuClick(data)}
      >
        <span className={classNames('menu-name')}>{data.label}</span>
        <Ico
          type='caret-down'
          className={classNames(`${isChild ? 'display-none' : ''}`)}
        />
      </div>
    ),
    []
  )

  const getMenuChild = data => {
    return (
      <div className={classNames('navbar-context-menu-child')}>
        {data.map(itm => getMenuItem(itm, true))}
      </div>
    )
  }

  const getMenuItem = (data, isChild = false) => {
    const { value, child } = data
    const customClass = classNames({
      'navbar-context-menu-item': !isChild,
      'navbar-context-menu-child-item': isChild,
      active: valuePaths.includes(value),
      hover: hoverValue === value,
    })

    return (
      <div key={value} className={customClass}>
        {child && child.length ? (
          <Trigger
            popupClassName='menu-trigger-container'
            showAction='hover'
            offsetY={24}
            placement={`${isChild ? 'right-start' : 'bottom-start'}`}
            onPopupVisibleChange={visible => {
              if (visible) {
                setHoverValue(value)
              } else if (hoverValue === value) {
                setHoverValue(null)
              }
            }}
            popup={() => getMenuChild(child)}
          >
            {getMenuInfo({ data, isChild })}
          </Trigger>
        ) : (
          getMenuInfo({ data, isChild: true })
        )}
      </div>
    )
  }

  if (!dataSource || dataSource.length === 0) return null
  return (
    <div className={classNames('navbar-context-menu')}>
      {dataSource.map(itm => getMenuItem(itm))}
    </div>
  )
}

Menu.propTypes = {
  /**
   * active 的菜单 value
   */
  menuValue: PropTypes.any,
  /**
   * 菜单数据
   */
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
      child: PropTypes.array,
    })
  ),
  /**
   * 切换菜单触发事件
   */
  onChange: PropTypes.func,
}

export default Menu
