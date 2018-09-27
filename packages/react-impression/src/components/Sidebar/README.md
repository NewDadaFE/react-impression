### 示例

**基本用法**

> 配合 Collapse 组件、堆叠模式的 Nav 组件，完成侧边栏菜单样式的呈现。

1. Sidebar 组件中覆写了 Collapse 组件和 Nav 组件的样式
2. 侧边栏最多支持两级菜单的样式，更多层级样式请自行实现
3. 一级菜单可通过 Nav 组件实现，二级菜单通过 Collapse 组件 + Nav 组件 实现
4. 菜单栏的收起展开逻辑，需要使用者自行实现

```js
<Sidebar style={{ height: '450px' }}>
  <SidebarHeader>
    <img src="logo.png" />
    达达智能智能站点
  </SidebarHeader>
  <SidebarBody>
    <Nav activeKey="1" stacked>
      <Collapse eventKey="1">
        <CollapseTitle>
          <Icon type="bar-chart" />
          数据运营
        </CollapseTitle>
        <CollapseBody>
          <Nav activeKey="1-2" stacked>
            <NavItem eventKey="1-1">站点配送日报</NavItem>
            <NavItem eventKey="1-2">骑士配送日报</NavItem>
          </Nav>
        </CollapseBody>
      </Collapse>
      <NavItem eventKey="2">
        <Icon type="file-text" />
        订单管理
      </NavItem>
      <NavItem eventKey="3">
        <Icon type="cogs" />
        站点管理
      </NavItem>
      <NavItem eventKey="4" disabled>
        <Icon type="minus-circle" />
        禁用项
      </NavItem>
    </Nav>
  </SidebarBody>
</Sidebar>
```

**传配置项的用法**

> 通过给 SidebarBody 组件传入规定格式的配置项，完成侧边栏菜单样式的呈现。

1. 配置项格式为对象数组类型，具体字段请查看下面示例源码
2. 不支持二级菜单显示图标
3. 点击菜单项后的逻辑处理，需要使用者自行实现

```js
initialState = {
  activePath: '/B/2',
}
const CONFIG = [
  {
    name: '订单管理',
    path: '/A',
    icon: 'file-text',
  },
  {
    name: '数据运营',
    icon: 'bar-chart',
    children: [
      {
        name: '站点配送日报',
        path: '/B/1',
      },
      {
        name: '骑士配送日报',
        path: '/B/2',
      },
    ],
  },
]
const handleClick = (path, e) => {
  console.log('选中路由: ', path)
  setState({
    activePath: path,
  })
}
;<Sidebar style={{ height: '450px' }}>
  <SidebarHeader>
    <img src="logo.png" />
    达达智能智能站点
  </SidebarHeader>
  <SidebarBody
    onSelect={handleClick}
    config={CONFIG}
    activePath={state.activePath}
  />
</Sidebar>
```
