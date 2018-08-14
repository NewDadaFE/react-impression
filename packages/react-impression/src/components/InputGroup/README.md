### 示例

**基本用法**

```js
<Row>
  <Col>
    <InputGroup>
      <InputGroupAddon>@</InputGroupAddon>
      <InputGroupInput placeholder="请输入内容" />
    </InputGroup>
  </Col>
  <Col>
    <InputGroup>
      <InputGroupInput placeholder="请输入内容" />
      <InputGroupAddon>@</InputGroupAddon>
    </InputGroup>
  </Col>
  <Col>
    <InputGroup>
      <InputGroupAddon>@</InputGroupAddon>
      <InputGroupInput placeholder="请输入内容" />
      <InputGroupAddon>@</InputGroupAddon>
    </InputGroup>
  </Col>
  <Col>
    <InputGroup>
      <InputGroupAddon pure>+86</InputGroupAddon>
      <InputGroupInput placeholder="请输入电话" />
    </InputGroup>
  </Col>
</Row>
```

**不同尺寸**

```js
<Row>
  <Col col="3">
    <InputGroup size="sm">
      <InputGroupInput placeholder="请输入内容" />
      <InputGroupButton theme="primary">搜索</InputGroupButton>
    </InputGroup>
  </Col>
  <Col col="4">
    <InputGroup>
      <InputGroupInput placeholder="请输入内容" />
      <InputGroupButton theme="primary">搜索</InputGroupButton>
    </InputGroup>
  </Col>
  <Col col="5">
    <InputGroup size="lg">
      <InputGroupInput placeholder="请输入内容" />
      <InputGroupButton theme="primary">搜索</InputGroupButton>
    </InputGroup>
  </Col>
</Row>
```
