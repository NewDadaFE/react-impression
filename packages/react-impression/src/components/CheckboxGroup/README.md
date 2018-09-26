### 示例

**默认值（非受控组件）**

```js
<Form type="inline">
  <FormGroup>
    <label>默认值:</label>
    <CheckboxGroup defaultValue={['篮球', '足球']}>
      <Checkbox>篮球</Checkbox>
      <Checkbox>足球</Checkbox>
      <Checkbox>排球</Checkbox>
    </CheckboxGroup>
  </FormGroup>
</Form>
```

**指定值（受控组件）**

```js
<Form type="inline">
  <FormGroup>
    <label>传入的值:</label>
    <CheckboxGroup ref="checkboxs" value={['篮球', '足球']}>
      <Checkbox>篮球</Checkbox>
      <Checkbox>足球</Checkbox>
      <Checkbox>排球</Checkbox>
    </CheckboxGroup>
  </FormGroup>
</Form>
```
