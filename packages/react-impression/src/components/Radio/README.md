### 示例

**基本用法**

```js
<Form>
  <Form.Group>
    <label>Radio</label>
    <Radio ref="radio" value={1} onChange={this.onChangeHandle}>
      single
    </Radio>
  </Form.Group>
</Form>
```

**禁用状态**

```js
<Form>
  <Form.Group>
    <label>Disabled</label>
    <Radio disabled>Yes</Radio>
  </Form.Group>
</Form>
```
