### 示例

**行内类型**

```js
<Nav activeKey={1} type="inline">
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
<Nav activeKey={1} type="tab">
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
<Nav activeKey={1} type="pill">
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
<Nav activeKey={1} type="inline-bordered">
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
      <Nav activeKey={2} type="pill" stacked>
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
