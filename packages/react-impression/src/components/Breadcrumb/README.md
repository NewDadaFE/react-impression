### 示例

**基本使用**

```js
<Breadcrumb className="no-padding">
  <a href="javascript:void(0);">主页</a>
  <a href="javascript:void(0);">用户中心</a>
  <span>基本信息</span>
</Breadcrumb>
```

**箭头分隔符**

```js
<Breadcrumb className="no-padding" separator="arrow">
  <a href="javascript:void(0);">
    <Icon type="home" left />主页
  </a>
  <a href="javascript:void(0);">
    <Icon type="user" left />用户中心
  </a>
  <span>
    <Icon type="cog" left />基本信息
  </span>
</Breadcrumb>
```
