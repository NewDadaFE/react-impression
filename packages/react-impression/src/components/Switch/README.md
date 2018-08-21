### 示例

**基本用法**

```js
<Form grid>
  <FormGroup>
    <Switch defaultChecked />
  </FormGroup>
</Form>
```

**禁用状态**

```js
<Form grid>
  <FormGroup>
    <label>打开且禁用</label>
    <Switch disabled defaultChecked />
  </FormGroup>
  <FormGroup>
    <label>关闭且禁用</label>
    <Switch disabled defaultChecked={false} />
  </FormGroup>
</Form>
```

### 变更记录

v2.0.0

* 新增 sass 变量`$switch-addon-active-bg`用于 Switch 开状态背景色；
