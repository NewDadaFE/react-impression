### 示例

**页码较少的情况**

```js
const onSelectHandle = pageNo => {
  setState({
    activePage: pageNo,
  })
}
initialState = {
  totalPage: 6,
  activePage: 2,
}
;<Pagination
  onSelect={onSelectHandle}
  scope={3}
  totalPage={state.totalPage}
  activePage={state.activePage}
/>
```

**页码较多的情况**

```js
const onSelectHandle = pageNo => {
  setState({
    activePage: pageNo,
  })
}
initialState = {
  totalPage: 99,
  activePage: 50,
}
;<Pagination
  onSelect={onSelectHandle}
  scope={3}
  showSizeChanger={true}
  totalPage={state.totalPage}
  activePage={state.activePage}
/>
```

**自定义翻页控制按钮的内容**

```js
const onSelectHandle = pageNo => {
  setState({
    activePage: pageNo,
  })
}
initialState = {
  totalPage: 3,
  activePage: 1,
}
;<Pagination
  onSelect={onSelectHandle}
  scope={3}
  totalPage={state.totalPage}
  activePage={state.activePage}
  lastContent="上一页"
  nextContent="下一页"
/>
```

**快速跳转**

```js
const onSelectHandle = pageNo => {
  setState({
    activePage: pageNo,
  })
}
initialState = {
  totalPage: 12999,
  activePage: 50,
}
;<Pagination
  onSelect={onSelectHandle}
  scope={2}
  totalPage={state.totalPage}
  activePage={state.activePage}
  showQuickJumper
/>
```

**显示总数量**

显示总数量的功能依赖 **total 属性** 和 **showTotal 属性**。

```js
const onSelectHandle = pageNo => {
  setState({
    activePage: pageNo,
  })
}
initialState = {
  totalPage: 3,
  activePage: 1,
  total: 27,
}
;<Pagination
  onSelect={onSelectHandle}
  scope={2}
  totalPage={state.totalPage}
  activePage={state.activePage}
  total={state.total}
  showTotal
/>
```

**小尺寸翻页器**

```js
const onSelectHandle = pageNo => {
  setState({
    activePage: pageNo,
  })
}
initialState = {
  totalPage: 50,
  activePage: 1,
  total: 500,
}
;<Pagination
  onSelect={onSelectHandle}
  scope={2}
  totalPage={state.totalPage}
  activePage={state.activePage}
  total={state.total}
  showTotal
  size="sm"
/>
```

### 变更记录

v2.0.0

- 废弃`ellipsis`属性，自动显示省略号
- 新增`lastContent`、`nextContent`属性，支持自定义翻页控制按钮内容
- 新增`showQuickJumper`属性，支持快速跳转功能
- 新增`total`、 `showTotal`属性，支持显示总页数和总数据条数
