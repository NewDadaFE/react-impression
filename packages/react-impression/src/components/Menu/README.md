系统侧边栏组件

### 使用场景

- 定义系统侧边栏组件，包含系统头部，菜单栏，系统底部三个模块;
- 为页面和功能提供导航的菜单列表;

### 示例

#### 基本使用

垂直的侧边栏组件，菜单内嵌在侧边栏里，子菜单内嵌在菜单里。通过 `defaultSelectedValues` 设置初始化选中的菜单。

** `SubMenu` 的 value 属性必须唯一， `MenuItem` 的 value 可不唯一。**

```jsx
const MenuItem = Menu.MenuItem
const SubMenu = Menu.SubMenu
const menuProps = {
  logo: 'https://newdadafe.github.io/react-impression/logo.png',
  name: '我是系统名称',
  nameLogo: 'https://placehold.it/124x48',
  defaultSelectedValues: ['three', 'three-3', 'three-3-1'],
  onClick: ({ value, valuePath, domEvent }) =>
    console.log(value, valuePath, domEvent),
}
const menuItemIcon = 'https://pic.pngbag.com/00/20/90/d72d41d5e30e82d8.jpg'
;<Menu {...menuProps}>
  <MenuItem value="one" img={menuItemIcon} title="没有子菜单的一级菜单" />
  <MenuItem value="two" iconType="search" title="不可用一级菜单" disabled />
  <SubMenu value="three" iconType="group-o" title="有子菜单的一级菜单">
    <MenuItem value="search" title="查询" />
    <MenuItem value="three-2" title="二级菜单" />
    <SubMenu value="three-3" title="有子菜单的二级菜单">
      <MenuItem value="three-3-1" title="三级菜单" />
      <MenuItem value="three-3-2" title="三级菜单" />
    </SubMenu>
  </SubMenu>
  <SubMenu value="four" iconType="group-o" title="有子菜单的一级菜单">
    <MenuItem value="search" title="查询" />
    <MenuItem value="four-2" title="二级菜单" />
    <SubMenu value="four-3" title="有子菜单的二级菜单">
      <MenuItem value="four-3-1" title="三级菜单" />
      <MenuItem value="four-3-2" title="三级菜单" />
    </SubMenu>
  </SubMenu>
</Menu>
```

#### 自定义样式

支持自定义高度与宽度，超出高度滑动展示；支持自定义背景色；

```jsx
const MenuItem = Menu.MenuItem
const SubMenu = Menu.SubMenu
const menuProps = {
  style: { height: '400px', width: '300px', backgroundColor: '#a52a2a' },
  logo: 'https://newdadafe.github.io/react-impression/logo.png',
  nameLogo: 'https://placehold.it/124x48',
  collapsible: true,
  onClick: ({ value, valuePath, domEvent }) =>
    console.log(value, valuePath, domEvent),
}
;<Menu {...menuProps}>
  <MenuItem value="one" iconType="floppy" title="没有子菜单的一级菜单" />
  <MenuItem value="two" iconType="search" title="名字很长很长的一级菜单" />
  <SubMenu value="three" iconType="group-o" title="有子菜单的一级菜单">
    <MenuItem value="three-1" title="名字很长很长的二级菜单" />
    <MenuItem value="three-2" title="二级菜单" />
    <SubMenu value="three-3" title="有子菜单的二级菜单">
      <MenuItem value="three-3-1" title="名字很长很长的三级菜单" />
      <MenuItem value="three-3-2" title="三级菜单" />
    </SubMenu>
  </SubMenu>
  <MenuItem value="four" iconType="search" title="名字很长很长的一级菜单" />
  <MenuItem value="five" iconType="search" title="名字很长很长的一级菜单" />
  <MenuItem value="six" iconType="search" title="名字很长很长的一级菜单" />
  <MenuItem value="seven" iconType="search" title="名字很长很长的一级菜单" />
  <MenuItem value="eight" iconType="search" title="名字很长很长的一级菜单" />
</Menu>
```

#### 缩起侧边栏

侧边栏可以被缩起/展开。

```jsx
const MenuItem = Menu.MenuItem
const SubMenu = Menu.SubMenu
const menuProps = {
  logo: 'https://newdadafe.github.io/react-impression/logo.png',
  nameLogo: 'https://placehold.it/124x48',
  collapsible: true,
  onClick: ({ value, valuePath, domEvent }) =>
    console.log(value, valuePath, domEvent),
}
;<Menu {...menuProps}>
  <MenuItem value="one" iconType="floppy" title="没有子菜单的一级菜单" />
  <MenuItem value="two" iconType="search" title="名字很长很长的一级菜单" />
  <SubMenu value="three" iconType="group-o" title="有子菜单的一级菜单">
    <MenuItem value="three-1" title="名字很长很长的二级菜单" />
    <MenuItem value="three-2" title="二级菜单" />
    <SubMenu value="three-3" title="有子菜单的二级菜单">
      <MenuItem value="three-3-1" title="名字很长很长的三级菜单" />
      <MenuItem value="three-3-2" title="三级菜单" />
    </SubMenu>
  </SubMenu>
  <MenuItem value="four" iconType="search" title="名字很长很长的一级菜单" />
  <MenuItem value="five" iconType="search" title="名字很长很长的一级菜单" />
  <MenuItem value="six" iconType="search" title="名字很长很长的一级菜单" />
  <MenuItem value="seven" iconType="search" title="名字很长很长的一级菜单" />
  <MenuItem value="eight" iconType="search" title="名字很长很长的一级菜单" />
</Menu>
```

#### 单纯的菜单

没有顶部，只有菜单, 不可缩起。

```jsx
const MenuItem = Menu.MenuItem
const SubMenu = Menu.SubMenu
const menuProps = {
  onClick: ({ value, valuePath, domEvent }) =>
    console.log(value, valuePath, domEvent),
}
;<Menu {...menuProps}>
  <MenuItem value="one" iconType="floppy" title="没有子菜单的一级菜单" />
  <MenuItem value="two" iconType="search" title="名字很长很长的一级菜单" />
  <SubMenu value="three" iconType="group-o" title="有子菜单的一级菜单">
    <MenuItem value="three-1" title="名字很长很长的二级菜单" />
    <MenuItem value="three-2" title="二级菜单" />
    <SubMenu value="three-3" title="有子菜单的二级菜单">
      <MenuItem value="three-3-1" title="名字很长很长的三级菜单" />
      <MenuItem value="three-3-2" title="三级菜单" />
    </SubMenu>
  </SubMenu>
  <MenuItem value="four" iconType="search" title="名字很长很长的一级菜单" />
  <MenuItem value="five" iconType="search" title="名字很长很长的一级菜单" />
</Menu>
```

#### 缩起的菜单

没有顶部, 开启缩起菜单功能。

```jsx
const MenuItem = Menu.MenuItem
const SubMenu = Menu.SubMenu
const menuProps = {
  style: { height: '400px' },
  collapsible: true,
  onClick: ({ value, valuePath, domEvent }) =>
    console.log(value, valuePath, domEvent),
}
;<Menu {...menuProps}>
  <MenuItem value="one" iconType="floppy" title="没有子菜单的一级菜单" />
  <MenuItem value="two" iconType="search" title="名字很长很长的一级菜单" />
  <SubMenu value="three" iconType="group-o" title="有子菜单的一级菜单">
    <MenuItem value="three-1" title="名字很长很长的二级菜单" />
    <MenuItem value="three-2" title="二级菜单" />
    <SubMenu value="three-3" title="有子菜单的二级菜单">
      <MenuItem value="three-3-1" title="名字很长很长的三级菜单" />
      <MenuItem value="three-3-2" title="三级菜单" />
    </SubMenu>
  </SubMenu>
  <MenuItem value="four" iconType="search" title="名字很长很长的一级菜单" />
  <MenuItem value="five" iconType="search" title="名字很长很长的一级菜单" />
</Menu>
```

#### 初始化展开菜单

菜单默认是折叠的， 通过 `defaultOpenAll` 可以初始化展开所有菜单, 通过 `defaultOpenValues` 可以设置初始化想要展开的菜单。 同时设置这两个属性，`defaultOpenAll` 优先级高于 `defaultOpenValues`。

```jsx
const MenuItem = Menu.MenuItem
const SubMenu = Menu.SubMenu
const menuProps = {
  style: { height: '400px' },
  collapsible: true,
  defaultOpenAll: true,
  defaultOpenValues: ['three', 'four'],
  onClick: ({ value, valuePath, domEvent }) =>
    console.log(value, valuePath, domEvent),
}
;<Menu {...menuProps}>
  <MenuItem value="one" iconType="floppy" title="没有子菜单的一级菜单" />
  <MenuItem value="two" iconType="search" title="名字很长很长的一级菜单" />
  <SubMenu value="three" iconType="group-o" title="有子菜单的一级菜单">
    <MenuItem value="three-1" title="名字很长很长的二级菜单" />
    <MenuItem value="three-2" title="二级菜单" />
    <SubMenu value="three-3" title="有子菜单的二级菜单">
      <MenuItem value="three-3-1" title="名字很长很长的三级菜单" />
      <MenuItem value="three-3-2" title="三级菜单" />
    </SubMenu>
  </SubMenu>
  <SubMenu value="four" iconType="search" title="名字很长很长的一级菜单">
    <MenuItem value="four-1" title="名字很长很长的二级菜单" />
    <MenuItem value="four-2" title="二级菜单" />
  </SubMenu>
  <MenuItem value="five" iconType="search" title="名字很长很长的一级菜单" />
</Menu>
```

### Menu.SubMenu

#### 参数

| 名称     | 说明             | 类型                    | 默认值 |
| -------- | ---------------- | ----------------------- | ------ |
| iconType | 菜单图标类型     | String                  | -      |
| img      | 菜单左侧图片地址 | String                  | -      |
| title    | 菜单名称         | String                  | -      |
| value    | 菜单值           | String                  | -      |
| children | 菜单的子菜单     | Array<MenuItem/SubMenu> | null   |

### Menu.MenuItem

#### 参数

| 名称     | 说明             | 类型   | 默认值 |
| -------- | ---------------- | ------ | ------ |
| iconType | 菜单图标类型     | String | -      |
| img      | 菜单左侧图片地址 | String | -      |
| title    | 菜单名称         | String | -      |
| value    | 菜单值           | String | -      |

**`iconType` 与 `img` 属性都可以定义当前菜单图标，`iconType` 的优先级高于 `img`。**
