### 示例

**基本用法**

```js
<Nav activeKey={1}>
  <NavItem eventKey={1} active>
    标题
  </NavItem>
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

* 新增 sass 变量$nav-border-color 表示 Nav 边框颜色
* 新增 sass 变量$nav-border-width 表示 Nav 边框宽度
* 新增 sass 变量$nav-normal-padding 表示 NavItem 基本 padding
* 新增 sass 变量$nav-card-padding 表示 NavItem card 模式下 padding
* 新增 sass 变量$nav-stacked-padding 表示 NavItem stacked 模式下 padding
* 新增 sass 变量$nav-stacked-margin-bottom 表示 NavItem stacked 模式下 margin-bottom
* 删除 type 属性的 tab、pill、inline 可选项，支持 card 属性值
