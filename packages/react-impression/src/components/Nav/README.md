### 示例

**基本用法**

```js
const handleNav = activeKey => {
  setState({
    activeKey,
  })
}
initialState = {
  activeKey: 6,
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
  <NavItem eventKey={2}>长标题</NavItem>
  <NavItem eventKey={3}>标题很长</NavItem>
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

**滑块类型**

```js
<Nav activeKey={1} type="block">
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

**尺寸**

```js
<Nav activeKey={2} size="xs" >
  <NavItem eventKey={1}>选中</NavItem>
  <NavItem eventKey={2}>链接</NavItem>
  <NavItem eventKey={3}>其他</NavItem>
  <NavItem eventKey={4} disabled>
    禁用
  </NavItem>
</Nav>
<Nav activeKey={2} size="xs" type="tab">
  <NavItem eventKey={1}>选中</NavItem>
  <NavItem eventKey={2}>链接</NavItem>
  <NavItem eventKey={3}>其他</NavItem>
  <NavItem eventKey={4} disabled>
    禁用
  </NavItem>
</Nav>
<Nav activeKey={2} size="xs" type="block">
  <NavItem eventKey={1}>选中</NavItem>
  <NavItem eventKey={2}>链接</NavItem>
  <NavItem eventKey={3}>其他</NavItem>
  <NavItem eventKey={4} disabled>
    禁用
  </NavItem>
</Nav>
<Nav activeKey={2} size="xs" stacked>
  <NavItem eventKey={1}>选中</NavItem>
  <NavItem eventKey={2}>链接</NavItem>
  <NavItem eventKey={3}>其他</NavItem>
  <NavItem eventKey={4} disabled>
    禁用
  </NavItem>
</Nav>
```

**选项折叠**

```js
<Nav activeKey={2} style={{ width: '200px' }}>
  <NavItem eventKey={1}>选中</NavItem>
  <NavItem eventKey={2}>链接</NavItem>
  <NavItem eventKey={3}>其他</NavItem>
  <NavItem eventKey={4} disabled>
    禁用
  </NavItem>
</Nav>
```

**变更记录**

v2.0.0

- 删除 type 属性的 pill 可选项，支持 tab,inline 属性值，默认为 inline
- 将删除对 Nav.Item／Nav.Link／Nav.Title 写法的支持，请使用 NavItem／NavLink／NavTitle
