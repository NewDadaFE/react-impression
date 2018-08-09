### 示例

**基本使用**

```js
<Breadcrumb className="no-padding">
  <a href="javascript:void(0);">Home</a>
  <a href="javascript:void(0);">User Center</a>
  <span>Basic Information</span>
</Breadcrumb>
```

**箭头分隔符**

```js
<Breadcrumb className="no-padding" separator="arrow">
  <a href="javascript:void(0);">
    <Icon type="home" left />Home
  </a>
  <a href="javascript:void(0);">
    <Icon type="user" left />User Center
  </a>
  <span>
    <Icon type="cog" left />Basic Information
  </span>
</Breadcrumb>
```
