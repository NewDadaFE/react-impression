### 示例

**基本用法**

```js
<Breadcrumb className="no-padding">
  <a href="javascript:void(0);">首页</a>
  <a href="javascript:void(0);">二级菜单</a>
  <span>当前页面</span>
</Breadcrumb>
```

**箭头分隔符**

```js
<Breadcrumb className="no-padding" separator="arrow">
  <a href="javascript:void(0);">首页</a>
  <a href="javascript:void(0);">二级菜单</a>
  <span>当前页面</span>
</Breadcrumb>
```

**箭头分隔符（内容带 Icon )**

```js
<Breadcrumb className="no-padding" separator="arrow">
  <a href="javascript:void(0);">
    <Icon type="home" left />
    首页
  </a>
  <a href="javascript:void(0);">
    <Icon type="user" left />
    二级菜单
  </a>
  <span>
    <Icon type="cog" left />
    当前页面
  </span>
</Breadcrumb>
```
