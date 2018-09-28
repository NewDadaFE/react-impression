### 示例

**默认使用，需要传入 type 参数**

```js
<Icon type="search" />
```

**尺寸，包括 xs，sm，lg，2x，3x，5x，7x，10x**

```js
<div>
  <Icon type="list" size="2x" className="offset-r-lg" />
  <Icon
    type="list"
    size="lg"
    className="offset-r-lg"
    style={{ verticalAlign: '0%' }}
  />
  <Icon type="list" size="sm" />
</div>
```

**位置：包括 left，right**

```js
<div>
  <div>
    <Icon type="list" left />
    <span>图标在左边</span>
  </div>
  <div>
    <span>图标在左边</span>
    <Icon type="list" right />
  </div>
</div>
```
