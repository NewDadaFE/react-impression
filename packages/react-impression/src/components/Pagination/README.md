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
  scope={2}
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
  scope={2}
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
  scope={2}
  totalPage={state.totalPage}
  activePage={state.activePage}
  lastContent="上一页"
  nextContent="下一页"
/>
```

### 变更记录

v2.0.0

* 废弃`ellipsis`属性，自动显示省略号
* 新增`lastContent`、`nextContent`属性，支持自定义翻页控制按钮内容
