### Example

**defaultValue**

```js
<Form type='inline'>
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

**传入value**

```js
 <Form type='inline'>
  <Form.Group>
    <label>value:</label>
    <CheckboxGroup
      ref='checkboxs'
      value={['basketball', 'football']}
    >
      <Checkbox>basketball</Checkbox>
      <Checkbox>football</Checkbox>
      <Checkbox>volleyball</Checkbox>
    </CheckboxGroup>
  </Form.Group>
</Form>
```