### 示例

**尺寸**

```js
<Form grid>
  <FormGroup>
    <label>大尺寸（默认）</label>
    <Switch defaultChecked />
  </FormGroup>
  <FormGroup>
    <label>小尺寸</label>
    <Switch defaultChecked size="sm" />
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

**加载中状态**

```js
<Form grid>
  <FormGroup>
    <Switch defaultChecked loading />
  </FormGroup>
  <FormGroup>
    <Switch defaultChecked={false} loading />
  </FormGroup>
</Form>
```

### 变更记录

v3.0.0

- 新增 loading 属性
- 新增 size 属性，支持 lg(默认)、sm 两种尺寸
