### 代码示例

```js
const handleShowInfo = () => {
  Message.info('这是一条显示1s，可手动关闭的信息！', 1000, true)
}
const handleShowSuccess = () => {
  Message.success('消息默认显示2s！此条消息可手动关闭哦～', undefined, true)
}
const handleShowWarning = () => {
  Message.warning(
    '这是一条显示5s的警告警告警告警告警告警告警告警告警警警警警警告告告告警告警告警告警告警告警告警告警告消息！最大宽度为 body宽度的一半 与 700px 之间取最大',
    5000
  )
}
const handleShowError = () => {
  Message.error('你好，这是一条错误消息！')
}
const handleShowLoading = () => {
  Message.loading('正在执行中...', 0)
  // 4秒后关闭
  setTimeout(() => {
    Message.hideMessage()
  }, 4000)
}
;<Row>
  <Col>
    <Button theme="primary" onClick={handleShowInfo}>
      信息
    </Button>
  </Col>
  <Col>
    <Button theme="primary" onClick={handleShowSuccess}>
      成功
    </Button>
  </Col>
  <Col>
    <Button theme="primary" onClick={handleShowWarning}>
      警告
    </Button>
  </Col>
  <Col>
    <Button theme="primary" onClick={handleShowError}>
      错误
    </Button>
  </Col>
  <Col>
    <Button theme="primary" onClick={handleShowLoading}>
      加载
    </Button>
  </Col>
  <Message />
</Row>
```

### 变更记录

v2.0.0

* 新增 支持手动关闭消息
* 新增 scss 变量`$message-min-width`表示 Message 最小宽度
