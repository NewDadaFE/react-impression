### 示例

**基本用法**

请使用者严格按照以下规则使用，否则会出现样式混乱的问题。

1. **必须与 Collapse 组件、 Nav 组件（堆叠模式）配合**，才能完成侧边栏菜单样式的呈现。
2. 一级菜单可通过 Nav 组件 实现，二级菜单通过 Collapse 组件 + Nav 组件 实现。
3. **Nav 组件 必须与 NavItem 组件 配合，不可与 NavLink 组件 配合使用。**
4. **NavItem 组件 下必须有一个 a 标签**，也可以用 recat-router 库中的 Link 组件。**推荐使用 Link 组件。**

**特别提醒**

- Sidebar 组件中覆写了 Collapse 组件 和 Nav 组件 的样式
- 侧边栏**最多支持两级菜单的样式**，更多层级样式请自行实现
- 菜单栏的收起展开逻辑，需要使用者自行实现
- **Collapse 组件 不可以设置 eventKey 属性。**因此一级菜单若使用 Collapse 组件 + NavItem 组件 混合的方式，不可通过 Nav 组件 的 activeKey 属性控制选中状态。

```js
<div style={{ width: 230, height: 450 }}>
  <Sidebar>
    <SidebarHeader>
      <img src="logo.png" />
      小果园
    </SidebarHeader>
    <SidebarBody>
      <Nav stacked>
        <Collapse>
          <CollapseTitle>
            <Ico type="chart-bar" />
            热带地区
          </CollapseTitle>
          <CollapseBody>
            <Nav stacked>
              <NavItem eventKey="1-1">
                <a>芒果</a>
              </NavItem>
              <NavItem eventKey="1-2">
                <a>榴莲</a>
              </NavItem>
            </Nav>
          </CollapseBody>
        </Collapse>
        <Collapse>
          <CollapseTitle>
            <Ico type="file" />
            温带地区
          </CollapseTitle>
          <CollapseBody>
            <Nav stacked>
              <NavItem eventKey="2-1">
                <a>苹果</a>
              </NavItem>
              <NavItem eventKey="2-2">
                <a>梨</a>
              </NavItem>
              <NavItem eventKey="2-3">
                <a>橘子</a>
              </NavItem>
            </Nav>
          </CollapseBody>
        </Collapse>
      </Nav>
    </SidebarBody>
  </Sidebar>
</div>
```
