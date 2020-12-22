### 示例

**基本用法**

```js
const onLargeActiveHandle = (pageNo, pageSize) => {
  setState({
    largeActivePage: pageNo,
  })
}
const onSmallActiveHandle = (pageNo, pageSize) => {
  setState({
    smallActivePage: pageNo,
  })
}

initialState = {
  total: 666,
  largeActivePage: 50,
  smallActivePage: 2,
}
;<div>
  <div>大尺寸：</div>
  <Pagination
    onSelect={onLargeActiveHandle}
    scope={3}
    total={state.total}
    activePage={state.largeActivePage}
  />
  <div>小尺寸：</div>
  <Pagination
    onSelect={onSmallActiveHandle}
    scope={3}
    total={state.total}
    activePage={state.smallActivePage}
    size="sm"
  />
</div>
```

**改变 pageSize**

改变 pageSize 的功能依赖 **pageSize 属性**, **showSizeChanger 属性**和**onShowSizeChange 属性**。

```js
const onLargeActiveHandle = (pageNo, pageSize) => {
  setState({
    largeActivePage: pageNo,
  })
  console.log(pageSize)
}
const onSmallActiveHandle = (pageNo, pageSize) => {
  setState({
    smallActivePage: pageNo,
  })
  console.log(pageSize)
}
const onLargeSizeChange = pageSize => {
  setState({
    largePageSize: pageSize,
  })
}
const onSmallSizeChange = pageSize => {
  setState({
    smallPageSize: pageSize,
  })
}
initialState = {
  total: 6660,
  largeActivePage: 50,
  smallActivePage: 2,
  largePageSize: 50,
  smallPageSize: 20,
}
;<div>
  <div>大尺寸：</div>
  <Pagination
    onSelect={onLargeActiveHandle}
    scope={3}
    total={state.total}
    activePage={state.largeActivePage}
    pageSize={state.largePageSize}
    onShowSizeChange={onLargeSizeChange}
    showSizeChanger
  />
  <div>小尺寸：</div>
  <Pagination
    onSelect={onSmallActiveHandle}
    scope={3}
    total={state.total}
    activePage={state.smallActivePage}
    pageSize={state.smallPageSize}
    size="sm"
    onShowSizeChange={onSmallSizeChange}
    showSizeChanger
  />
</div>
```

**快速跳转**

快速跳转功能依赖 **showQuickJumper 属性**。

```js
const onLargeActiveHandle = pageNo => {
  setState({
    largeActivePage: pageNo,
  })
}
const onSmallActiveHandle = pageNo => {
  setState({
    smallActivePage: pageNo,
  })
}
initialState = {
  total: 6660,
  largeActivePage: 50,
  smallActivePage: 2,
}
;<div>
  <div>大尺寸：</div>
  <Pagination
    onSelect={onLargeActiveHandle}
    scope={3}
    total={state.total}
    activePage={state.largeActivePage}
    showQuickJumper
  />
  <div>小尺寸：</div>
  <Pagination
    onSelect={onSmallActiveHandle}
    scope={3}
    total={state.total}
    activePage={state.smallActivePage}
    size="sm"
    showQuickJumper
  />
</div>
```

**显示总数**

显示总数量的功能依赖 **total 属性** 和 **showTotal 属性**。

```js
const onLargeActiveHandle = pageNo => {
  setState({
    largeActivePage: pageNo,
  })
}
const onSmallActiveHandle = pageNo => {
  setState({
    smallActivePage: pageNo,
  })
}
initialState = {
  total: 6660,
  largeActivePage: 50,
  smallActivePage: 2,
}
;<div>
  <div>大尺寸：</div>
  <Pagination
    onSelect={onLargeActiveHandle}
    scope={3}
    total={state.total}
    activePage={state.largeActivePage}
    showTotal
  />
  <div>小尺寸：</div>
  <Pagination
    onSelect={onSmallActiveHandle}
    scope={3}
    total={state.total}
    activePage={state.smallActivePage}
    size="sm"
    showTotal
  />
</div>
```

**全局禁用**

```js
const onLargeActiveHandle = pageNo => {
  setState({
    largeActivePage: pageNo,
  })
}
const onSmallActiveHandle = pageNo => {
  setState({
    smallActivePage: pageNo,
  })
}
initialState = {
  total: 6660,
  largeActivePage: 50,
  smallActivePage: 2,
}
;<div>
  <div>大尺寸：</div>
  <Pagination
    onSelect={onLargeActiveHandle}
    scope={3}
    total={state.total}
    activePage={state.largeActivePage}
    showQuickJumper
    showSizeChanger
    showTotal
    disabled
  />
  <div>小尺寸：</div>
  <Pagination
    onSelect={onSmallActiveHandle}
    scope={3}
    total={state.total}
    activePage={state.smallActivePage}
    size="sm"
    showQuickJumper
    showSizeChanger
    showTotal
    disabled
  />
</div>
```

### 变更记录

v2.0.0

- 废弃 `ellipsis` 属性，自动显示省略号
- 新增 `lastContent`、`nextContent` 属性，支持自定义翻页控制按钮内容
- 新增 `showQuickJumper` 属性，支持快速跳转功能
- 新增 `total`、 `showTotal` 属性，支持显示总页数和总数据条数

v3.0.0

- 废弃 totalPage 属性，内部计算总页数
- 新增 size 属性，支持 sm，md(默认) 两种尺寸
- 新增 disabled 属性，全局禁用模式
- 新增 pageSize 属性、pageSizeOptions 属性，支持自定义每页数量
