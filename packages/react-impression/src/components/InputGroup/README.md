### 示例

**不同尺寸**

```js
<Row>
  <Col col="4">
    <InputGroup size="sm">
      <InputGroupInput placeholder="请输入内容" />
      <InputGroupButton theme="secondary">搜索</InputGroupButton>
    </InputGroup>
  </Col>
  <Col col="4">
    <InputGroup>
      <InputGroupInput placeholder="请输入内容" />
      <InputGroupButton theme="secondary">搜索</InputGroupButton>
    </InputGroup>
  </Col>
  <Col col="4">
    <InputGroup size="lg">
      <InputGroupInput placeholder="请输入内容" />
      <InputGroupButton theme="secondary">搜索</InputGroupButton>
    </InputGroup>
  </Col>
</Row>
```

**Select 的组合输入框**

```js
<InputGroup>
  <Select>
    <SelectOption value={1}>一</SelectOption>
    <SelectOption value={2}>二</SelectOption>
    <SelectOption value={3}>三</SelectOption>
    <SelectOption value={4}>四</SelectOption>
    <SelectOption value={5}>五</SelectOption>
    <SelectOption value={6}>六</SelectOption>
  </Select>
  <InputGroupInput placeholder="something" />
</InputGroup>
```
