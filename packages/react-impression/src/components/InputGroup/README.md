### 示例

**不同尺寸**

```js
<Form>
  <FormGroup>
    <label>默认尺寸：</label>
    <InputGroup>
      <InputGroupInput placeholder="请输入内容" />
      <InputGroupButton theme="secondary">搜索</InputGroupButton>
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <label>小尺寸：</label>
    <InputGroup size="sm">
      <InputGroupInput placeholder="请输入内容" />
      <InputGroupButton theme="secondary">搜索</InputGroupButton>
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <label>最小尺寸：</label>
    <InputGroup size="xs">
      <InputGroupInput placeholder="请输入内容" />
      <InputGroupButton theme="secondary">搜索</InputGroupButton>
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <label>大尺寸：</label>
    <InputGroup size="lg">
      <InputGroupInput placeholder="请输入内容" />
      <InputGroupButton theme="secondary">搜索</InputGroupButton>
    </InputGroup>
  </FormGroup>
</Form>
```

**Select 的组合输入框**

```js
<InputGroup>
  <Select style={{ width: '90px' }}>
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
