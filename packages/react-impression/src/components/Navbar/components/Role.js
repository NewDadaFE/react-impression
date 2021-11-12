import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Ico from '../../Ico'
import Trigger from '../../Trigger'

function Role({ dataSource, roleId, onChange }) {
  const [triggerVisible, setTriggerVisible] = useState(false)

  const activeRole = useMemo(
    () => {
      const result = dataSource.find(itm => itm.roleId === roleId)
      return result || {}
    },
    [dataSource, roleId]
  )

  const getRoleTrigger = () => {
    return dataSource.map(itm => (
      <div
        key={itm.roleId}
        className={classNames({
          'navbar-operation-role-child-item': true,
          active: roleId === itm.roleId,
        })}
        onClick={() => onChange(itm.roleId, itm)}
      >
        {itm.roleName}
      </div>
    ))
  }

  return (
    <div className={classNames('navbar-operation-role')}>
      <Trigger
        popupClassName='role-trigger-container'
        showAction='hover'
        offsetY={24}
        popup={() => getRoleTrigger()}
        onPopupVisibleChange={visible => setTriggerVisible(visible)}
      >
        <div
          className={classNames(
            'navbar-operation-role-item',
            `${triggerVisible ? 'hover' : ''}`
          )}
        >
          {activeRole.roleName}
          <Ico type='caret-down' />
        </div>
      </Trigger>
    </div>
  )
}

Role.propTypes = {
  /**
   * active 的角色 roleId
   */
  roleId: PropTypes.any,
  /**
   * 角色数据
   */
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      roleName: PropTypes.string,
      roleId: PropTypes.number,
    })
  ),
  /**
   * 切换角色触发事件
   */

  onChange: PropTypes.func,
}

export default Role
