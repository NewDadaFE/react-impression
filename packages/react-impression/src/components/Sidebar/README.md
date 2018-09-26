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
