### 示例

- **内容区页头**

```js
<PageHeader title="我是标题" ghost extra={<Button>操作区</Button>} />
```

- **弹窗页头**

```js
const handleClose = () => {}
<PageHeader
  title="我是弹窗标题"
  type="modal"
  extra={
    <Ico style={{ cursor: 'pointer' }} type="times" onClick={handleClose} />
  }
/>
```
