### 示例

**默认值（非受控组件**

```js
<Form type="inline">
  <Form.Group>
    <label>defaultValue:</label>
    <CheckboxGroup defaultValue={['basketball', 'football']}>
      <Checkbox>basketball</Checkbox>
      <Checkbox>football</Checkbox>
      <Checkbox>volleyball</Checkbox>
    </CheckboxGroup>
  </Form.Group>
</Form>
```

**指定值（受控组件）**

```js
<Form type="inline">
  <Form.Group>
    <label>value:</label>
    <CheckboxGroup ref="checkboxs" value={['basketball', 'football']}>
      <Checkbox>basketball</Checkbox>
      <Checkbox>football</Checkbox>
      <Checkbox>volleyball</Checkbox>
    </CheckboxGroup>
  </Form.Group>
</Form>
```
