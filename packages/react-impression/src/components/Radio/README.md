### 示例

单选组件，一般配合 [RadioGroup 单选组合](#/Data%20Entry/RadioGroup)使用。

**基本用法**

```js
<Radio checked>已选中项</Radio>
```

**禁用**

```js
<Row>
  <Col col={2}>
    <Radio disabled>未选不可点项</Radio>
  </Col>
  <Col col={2}>
    <Radio checked disabled>
      已选不可点项
    </Radio>
  </Col>
</Row>
```
