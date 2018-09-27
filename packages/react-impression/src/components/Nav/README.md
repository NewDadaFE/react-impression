### 示例

**基本用法**

```js
<Nav activeKey={0}>
  <NavItem eventKey={0}>标题</NavItem>
  <NavItem eventKey={2}>长标题</NavItem>
  <NavItem eventKey={3}>标题很长</NavItem>
  <NavItem eventKey={4}>标题特别长</NavItem>
  <NavItem eventKey={5}>标题再长一点</NavItem>
  <NavItem eventKey={6}>标题还敢长点吗</NavItem>
</Nav>
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
<Nav activeKey={1} type="card">
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

* 删除 type 属性的 tab、pill、inline 可选项，支持 card,normal 属性值，默认为 normal
* 将删除对 Nav.Item／Nav.Link／Nav.Title 写法的支持，请使用 NavItem／NavLink／NavTitle
