import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  SubMenu,
  MenuItem,
  MenuHeader,
  MenuFooter,
  MenuContext,
} from './components'

function Menu({
  style,
  className,
  theme,
  children,
  logo,
  name,
  nameLogo,
  collapsible,
  onClick,
  defaultSelectedValues,
  defaultOpenValues,
  defaultOpenAll,
}) {
  const [collapsed, setCollapsed] = useState(false)
  const [valuePath, setValuePath] = useState(defaultSelectedValues)

  const onCollapsedChange = () => {
    setCollapsed(!collapsed)
  }

  const onMenuItemClick = e => {
    const { value, parentValue } = e.currentTarget.dataset
    const valuePathTemp = parentValue
      ? parentValue.split('/').concat([value])
      : [value]
    setValuePath(valuePathTemp)
    const params = {
      value: value,
      valuePath: valuePathTemp,
      domEvent: e,
    }
    onClick(params)
  }

  return (
    <MenuContext.Provider
      value={{
        valuePath,
        defaultOpenAll,
        defaultOpenValues,
        collapsed,
        onMenuItemClick,
        bgColor: style.backgroundColor || '',
      }}
    >
      <div
        className={classnames(
          'menu',
          className,
          theme,
          `${collapsed ? 'collapsed' : ''}`
        )}
        style={style}
      >
        <MenuHeader {...{ logo, name, nameLogo }} />
        <MenuFooter
          collapsible={collapsible}
          onCollapsedChange={onCollapsedChange}
        />
        <div className='menu-content'>{children}</div>
      </div>
    </MenuContext.Provider>
  )
}

Menu.propTypes = {
  /**
   * 自定义样式
   */
  style: PropTypes.object,
  /**
   * 自定义类名
   */
  className: PropTypes.string,
  /**
   * 菜单类型，目前只支持垂直
   */
  mode: PropTypes.oneOf(['vertical']),
  /**
   * 菜单主题，目前只支持 dark
   */
  theme: PropTypes.oneOf(['dark']),
  /**
   * 头部logo
   */
  logo: PropTypes.string,
  /**
   * 头部文案
   */
  name: PropTypes.string,
  /**
   * 头部图片
   */
  nameLogo: PropTypes.string,
  /**
   * 可折叠
   */
  collapsible: PropTypes.bool,
  /**
   * 点击 MenuItem 回调
   *
   * @param {String} value 当前 value
   * @param {Array} valuePath 当前 value 路径
   * @param {SyntheticEvent} domEvent react 合成事件
   */
  onClick: PropTypes.func,
  /**
   * 初始选中的菜单项 value 数组
   */
  defaultSelectedValues: PropTypes.array,
  /**
   * 初始化展开全部菜单项
   */
  defaultOpenAll: PropTypes.bool,
  /**
   * 初始展开的菜单项 value 数组
   */
  defaultOpenValues: PropTypes.array,
  /**
   * 子组件
   * @ignore
   */
  children: PropTypes.node,
}

Menu.defaultProps = {
  theme: 'dark',
  mode: 'vertical',
  style: {},
  children: null,
  collapsible: false,
  onClick: () => {},
  defaultSelectedValues: [],
  defaultOpenValues: [],
  defaultOpenAll: false,
}

Menu.SubMenu = SubMenu
Menu.MenuItem = MenuItem

export default Menu
