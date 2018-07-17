### Examples

**default**

```js
selectChangeHandle = (val, text) => {
  Notification.info({
    title: 'Select',
    message: `${text} 被选中了！！！`,
  })

  this.refs.select3.setValue(null)
  this.refs.select3.focus()
}
;<Form type="inline">
  <Form.Group>
    <label>default:</label>
    <Select ref="select1" onChange={this.selectChangeHandle}>
      <Select.Option value="1">First</Select.Option>
      <Select.Option value="2">Second</Select.Option>
      <Select.Option value="3">Third</Select.Option>
      <Select.Option value="4">Four</Select.Option>
      <Select.Option value="5">Five</Select.Option>
      <Select.Option value="6">Six</Select.Option>
      <Select.Option value="7">Seven</Select.Option>
      <Select.Option value="8">Eight</Select.Option>
      <Select.Option value="9">Nine</Select.Option>
      <Select.Option value="10">Ten</Select.Option>
    </Select>
  </Form.Group>
</Form>
```

**value**

```js
selectChangeHandle = (val, text) => {
  Notification.info({
    title: 'Select',
    message: `${text} 被选中了！！！`,
  })

  this.refs.select3.setValue(null)
  this.refs.select3.focus()
}
;<Form type="inline">
  <Form.Group>
    <label>value:</label>
    <Select ref="select2" value={0} onChange={this.selectChangeHandle}>
      <Select.Option value={0}>First</Select.Option>
      <Select.Option value={1}>Second</Select.Option>
      <Select.Option value={2}>Third</Select.Option>
    </Select>
  </Form.Group>
</Form>
```

**defaultValue**

```js
selectChangeHandle = (val, text) => {
  Notification.info({
    title: 'Select',
    message: `${text} 被选中了！！！`,
  })

  this.refs.select3.setValue(null)
  this.refs.select3.focus()
}
;<Form type="inline">
  <Form.Group>
    <label>defaultValue:</label>
    <Select ref="select3" defaultValue={0} onChange={this.selectChangeHandle}>
      <Select.Option value={0}>First</Select.Option>
      <Select.Option value={1}>Second</Select.Option>
      <Select.Option value={2}>Third</Select.Option>
    </Select>
  </Form.Group>
</Form>
```

**disabled**

```js
<Form type="inline">
  <Form.Group>
    <label>disabled:</label>
    <Select disabled>
      <Select.Option value="1">First</Select.Option>
      <Select.Option value="2">Second</Select.Option>
      <Select.Option value="3">Third</Select.Option>
    </Select>
  </Form.Group>
</Form>
```

**option disabled**

```js
<Form type="inline">
  <Form.Group>
    <label>option disabled:</label>
    <Select>
      <Select.Option value="1">First</Select.Option>
      <Select.Option value="2" disabled>
        Second
      </Select.Option>
      <Select.Option value="3">Third</Select.Option>
    </Select>
  </Form.Group>
</Form>
```
