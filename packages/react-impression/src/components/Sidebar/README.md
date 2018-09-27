### 示例

**基本用法**

* 配合 Collapse 组件、堆叠模式的 Nav 组件，完成侧边栏菜单样式的呈现。
* Sidebar 组件中覆写了 Collapse 组件和 Nav 组件的样式
* 侧边栏最多支持两级菜单的样式，更多层级样式请自行实现
* 一级菜单可通过 Nav 组件实现，二级菜单通过 Collapse 组件 + Nav 组件 实现
* 菜单栏的收起展开逻辑，需要使用者自行实现

```js
<Sidebar style={{ height: 450 }}>
  <SidebarHeader>
    <img src="logo.png" />
    达达智能智能站点
  </SidebarHeader>
  <SidebarBody>
    <Nav stacked>
      <Collapse>
        <CollapseTitle>
          <Icon type="bar-chart" />
          数据运营
        </CollapseTitle>
        <CollapseBody>
          <Nav stacked>
            <NavItem eventKey="1-1">站点配送日报</NavItem>
            <NavItem eventKey="1-2">骑士配送日报</NavItem>
          </Nav>
        </CollapseBody>
      </Collapse>
      <Collapse>
        <CollapseTitle>
          <Icon type="file-text" />
          订单管理
        </CollapseTitle>
        <CollapseBody>
          <Nav stacked>
            <NavItem eventKey="2-1">站点配送日报</NavItem>
          </Nav>
        </CollapseBody>
      </Collapse>
    </Nav>
  </SidebarBody>
</Sidebar>
```
