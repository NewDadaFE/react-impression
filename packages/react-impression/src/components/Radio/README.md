### 示例

**基本用法**

```js
<Radio checked>已选中项</Radio>
```

**禁用状态**

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

### 变更记录

v2.0.0

* 新增 sass 变量`$radio-addon-size`表示 Radio 尺寸
* 新增 sass 变量`$radio-addon-bg-color`表示 Radio 背景色
* 新增 sass 变量`$radio-addon-border-width`表示 Radio 边框宽度
* 新增 sass 变量`$radio-addon-border-color`表示 Radio 未选中边框色
* 新增 sass 变量`$radio-addon-checked-color`表示 Radio 选中色
* 新增 sass 变量`$radio-addon-disabled-color`表示 Radio 禁用色
* 更改 sass 变量`$radio-addon-width`、`$radio-addon-height`为 `$radio-addon-i-size` 表示 Radio 中间圆点尺寸
