### 说明

> Nav 组件即将被废弃，可以使用 [Tabs 组件](#/Navigation/Tabs) 进行替换。

### 示例

**Nav 组件** 与 **NavLink 组件**、**NavItem 组件**配合使用时，需要注意：

1. Nav 组件 的**activeKey 属性**
   - 只有**与 NavItem 组件 搭配**时有效
   - 且 NavItem 组件** 必须有 eventKey 属性**
2. 以下情况需要开发者自行控制子项的选中状态：
   - Nav 组件 与 **NavLink 组件 搭配**使用时
   - Nav 组件 与**无 eventKey 属性的 NavItem 组件 搭配**使用时

自行控制选中状态方法为：

1. NavLink 组件 通过**改变组件的 active 样式类**控制
2. NavItem 组件 无 eventKey 属性通过**改变组件的 active 样式类**控制
3. NavItem 组件 有 eventKey 属性通过**active 属性**控制

Nav 组件可以用于实现侧边栏的菜单，具体用法参考 [Sidebar 组件](#/Navigation/Sidebar)

**基本用法**

```js
const handleNav = activeKey => {
  setState({
    activeKey,
  })
}
initialState = {
  activeKey: 0,
}
;<div>
  <Nav activeKey={state.activeKey} onSelect={handleNav}>
    <NavItem eventKey={0}>标题</NavItem>
    <NavItem eventKey={2}>长标题</NavItem>
    <NavItem eventKey={3}>标题很长</NavItem>
    <NavItem eventKey={4}>标题特别长</NavItem>
    <NavItem eventKey={5}>标题再长一点</NavItem>
    <NavItem eventKey={6}>标题还敢长点吗</NavItem>
  </Nav>
</div>
```

**选项禁用**

```js
<Nav>
  <NavItem eventKey={1}>标题</NavItem>
  <NavItem eventKey={2} active>
    长标题
  </NavItem>
  <NavItem eventKey={3} disabled>
    标题很长
  </NavItem>
  <NavItem eventKey={4}>标题特别长</NavItem>
  <NavItem eventKey={5}>标题再长一点</NavItem>
  <NavItem eventKey={6}>标题还敢长点吗</NavItem>
</Nav>
```

**卡片类型**

```js
<Nav activeKey={1} type="tab">
  <NavItem eventKey={1}>标题</NavItem>
  <NavItem eventKey={2}>长标题</NavItem>
  <NavItem eventKey={3}>标题很长</NavItem>
  <NavItem eventKey={4} disabled>
    标题特别长
  </NavItem>
  <NavItem eventKey={5}>标题再长一点</NavItem>
</Nav>
```

**纵向堆叠类型**

```js
<Row>
  <Col col="3">
    <Nav activeKey={2} stacked>
      <NavItem eventKey={1}>选中</NavItem>
      <NavItem eventKey={2}>链接</NavItem>
      <NavItem eventKey={3}>其他</NavItem>
      <NavItem eventKey={4} disabled>
        禁用
      </NavItem>
    </Nav>
  </Col>
</Row>
```

**变更记录**

v2.0.0

- 删除 type 属性的 pill 可选项，支持 tab,inline 属性值，默认为 inline
- 将删除对 Nav.Item／Nav.Link／Nav.Title 写法的支持，请使用 NavItem／NavLink／NavTitle
