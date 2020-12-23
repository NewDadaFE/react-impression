### 示例

配合 CollapseTitle 组件、CollapseBody 组件实现展开收起的效果。

**基本用法**

```js
<Collapse>
  <CollapseTitle>
    <Ico type="bars" />
    公共页面
  </CollapseTitle>
  <CollapseBody>
    <Nav>
      <NavItem>
        <span>登录</span>
      </NavItem>
      <NavItem>
        <a
          href="http://fontawesome.io/icons/"
          rel="noreferrer noopener"
          target="_blank"
        >
          报错页面
        </a>
      </NavItem>
    </Nav>
  </CollapseBody>
</Collapse>
```

**三级菜单实现**

```js
<Sidebar>
  <SidebarHeader>
    <Ico type="list" className="offset-r" />
    <span>{'首页'}</span>
  </SidebarHeader>
  <SidebarBody>
    <Nav stacked>
      <Collapse>
        <CollapseTitle>
          <Ico type="list" className="offset-r" />
          {'我是一级菜单'}
        </CollapseTitle>
        <CollapseBody>
          <Nav stacked>
            <Collapse isSecondary>
              <CollapseTitle>{'我是二级菜单'}</CollapseTitle>
              <CollapseBody>
                <Nav stacked>
                  <NavItem eventKey="3-1">
                    <a>{'我是三级菜单'}</a>
                  </NavItem>
                  <NavItem eventKey="3-2">
                    <a>{'我是三级菜单'}</a>
                  </NavItem>
                </Nav>
              </CollapseBody>
            </Collapse>
            <NavItem eventKey="2-2">
              <a>{'我是二级菜单'}</a>
            </NavItem>
            <NavItem eventKey="2-3">
              <a>{'我是二级菜单'}</a>
            </NavItem>
          </Nav>
        </CollapseBody>
      </Collapse>
      <NavItem key={1}>
        <a href="">
          <Ico type="list" className="offset-r" />
          {'我是一级菜单'}
        </a>
      </NavItem>
    </Nav>
  </SidebarBody>
</Sidebar>
```

### 变更记录

v2.1.1-alpha.2

- 新增 isSecondary 属性用于实现三级菜单功能
