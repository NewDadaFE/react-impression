### 示例

**行内类型**

```js
<Nav activeKey={1}>
  <NavItem eventKey={1}>选中</NavItem>
  <NavItem eventKey={2}>链接</NavItem>
  <NavItem eventKey={3}>其他</NavItem>
  <NavItem eventKey={4} disabled>
    禁用
  </NavItem>
</Nav>
```

**选项类型**

```js
<Nav activeKey={1}>
  <NavItem eventKey={1}>选中</NavItem>
  <NavItem eventKey={2}>链接</NavItem>
  <NavItem eventKey={3}>其他</NavItem>
  <NavItem eventKey={4} disabled>
    禁用
  </NavItem>
</Nav>
```

**胶囊类型**

```js
<Nav activeKey={1}>
  <NavItem eventKey={1}>选中</NavItem>
  <NavItem eventKey={2}>链接</NavItem>
  <NavItem eventKey={3}>其他</NavItem>
  <NavItem eventKey={4} disabled>
    禁用
  </NavItem>
</Nav>
```

**下划线类型**

```js
<Nav activeKey={1}>
  <NavItem eventKey={1}>选中</NavItem>
  <NavItem eventKey={2}>链接</NavItem>
  <NavItem eventKey={3}>其他</NavItem>
  <NavItem eventKey={4} disabled>
    禁用
  </NavItem>
</Nav>
```

**堆叠的胶囊类型**

```js
<Row>
  <Col col="3">
    <Card>
      <Nav activeKey={2} type="card" stacked>
        <NavItem eventKey={1}>选中</NavItem>
        <NavItem eventKey={2}>链接</NavItem>
        <NavItem eventKey={3}>其他</NavItem>
        <NavItem eventKey={4} disabled>
          禁用
        </NavItem>
      </Nav>
    </Card>
  </Col>
</Row>
```

**变更记录**

v2.0.0

* 新增 sass 变量$nav-border-color 表示 Nav 边框颜色
* 新增 sass 变量$nav-border-width 表示 Nav 边框宽度
* 新增 sass 变量$nav-normal-padding 表示 NavItem 基本 padding 宽度
