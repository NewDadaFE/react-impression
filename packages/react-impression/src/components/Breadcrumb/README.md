### 示例

**基本用法**

```js
<Breadcrumb className="no-padding">
  <a href="#">首页</a>
  <a href="#">二级菜单</a>
  <a href="#">三级菜单</a>
  <span>当前页面</span>
</Breadcrumb>
```

**路径长度超出四级**

```js
<Breadcrumb className="no-padding">
  <a href="#">首页</a>
  <a href="#">二级菜单</a>
  <a href="#">三级菜单</a>
  <a href="#">四级菜单</a>
  <a href="#">五级菜单</a>
  <span>当前页面</span>
</Breadcrumb>
```

### 变更记录

v2.0.0

- 删除 separator 属性，分割标识只为 arrow 模式
