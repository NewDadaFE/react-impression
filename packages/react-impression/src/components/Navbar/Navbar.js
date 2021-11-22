import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Menu, Icons, Role } from './components'

function Navbar({
  style,
  className,
  children,
  logo,
  menuValue,
  menuDataSource,
  onMenuChange,
  iconDataSource,
  roleId,
  roleDataSource,
  onRoleChange,
}) {
  if (children) {
    return <div className={classNames('navbar', className)}>{children}</div>
  }
  return (
    <div className={classNames('navbar-container', className)} style={style}>
      <div className={classNames('navbar-wrapper')}>
        <div className={classNames('navbar-context')}>
          {logo && (
            <div className={classNames('navbar-context-logo')}>
              <img src={logo} alt='' />
            </div>
          )}
          <Menu
            dataSource={menuDataSource}
            menuValue={menuValue}
            onChange={onMenuChange}
          />
        </div>
        <div className={classNames('navbar-operation')}>
          <Icons dataSource={iconDataSource} />
          <Role
            dataSource={roleDataSource}
            roleId={roleId}
            onChange={onRoleChange}
          />
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  /**
   * 自定义样式
   */
  style: PropTypes.shape(),
  /**
   * 自定义类名
   */
  className: PropTypes.string,
  /**
   * 子组件
   */
  children: PropTypes.node,
  /**
   * 系统图标
   */
  logo: PropTypes.string,
  /**
   * 当前活动菜单
   */
  menuValue: PropTypes.any,
  /**
   * 菜单数据
   */
  menuDataSource: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
      child: PropTypes.array,
    })
  ),
  /**
   * 切换菜单触发事件
   */
  onMenuChange: PropTypes.func,
  /**
   * 小图标数据
   */
  iconDataSource: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      iconUrl: PropTypes.string,
      children: PropTypes.any,
    })
  ),
  /**
   * 当前角色
   */
  roleId: PropTypes.any,
  /**
   * 角色数据
   */
  roleDataSource: PropTypes.arrayOf(
    PropTypes.shape({
      roleName: PropTypes.string,
      roleId: PropTypes.number,
    })
  ),
  /**
   * 切换角色触发事件
   */
  onRoleChange: PropTypes.func,
}

Navbar.defaultTypes = {
  className: '',
  children: null,
  logo: '',
  menuValue: '',
  menuDataSource: [],
  onMenuChange: (value, data, paths) =>
    console.log('点击菜单：', value, data, paths),
  iconDataSource: [],
  roleId: '',
  roleDataSource: [],
  onRoleChange: (roleId, data) => console.log('点击切换角色：', roleId, data),
}

export default Navbar
