### 示例

**默认值（非受控组件）**

```js
const radioArray = [
  {
    id: 1,
    name: 'Yes',
  },
  {
    id: 2,
    name: 'No',
  },
]
;<Form>
  <Form.Group>
    <label>defaultValue</label>
    <RadioGroup ref="radios" defaultValue={1}>
      {radioArray.length > 0 &&
        radioArray.map(item => (
          <Radio key={item.id} value={item.id}>
            {item.name}
          </Radio>
        ))}
    </RadioGroup>
  </Form.Group>
</Form>
```

**指定值（受控组件）**

```js
const radioArray = [
  {
    id: 1,
    name: 'Yes',
  },
  {
    id: 2,
    name: 'No',
  },
]
;<Form>
  <Form.Group>
    <label>value</label>
    <RadioGroup
      value={2}
      onChange={(event, value) => console.log(event, value)}
    >
      {radioArray.length > 0 &&
        radioArray.map(item => (
          <Radio key={item.id} value={item.id}>
            {item.name}
          </Radio>
        ))}
    </RadioGroup>
  </Form.Group>
</Form>
```

**禁用状态**

```js
const radioArray = [
  {
    id: 1,
    name: 'Yes',
  },
  {
    id: 2,
    name: 'No',
  },
]
;<Form>
  <Form.Group>
    <label>Disabled</label>
    <RadioGroup value={2} disabled>
      {radioArray.length > 0 &&
        radioArray.map(item => (
          <Radio key={item.id} value={item.id}>
            {item.name}
          </Radio>
        ))}
    </RadioGroup>
  </Form.Group>
</Form>
```
