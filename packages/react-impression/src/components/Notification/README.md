### 示例

```js
const handleShowInfo = () => {
  Notification.info({
    closeable: false,
    title: '通知',
    message: '欢迎，这是一个消息通知。',
  })
}
const handleShowSuccess = () => {
  Notification.success({
    title: '成功',
    message: '恭喜您，操作成功！',
    duration: 500,
  })
}
const handleShowWarning = () => {
  Notification.warning({
    title: '警告',
    message: '请注意，前方有狗熊！',
  })
}
const handleShowError = () => {
  Notification.error({
    title: '错误',
    message: '很遗憾，您的小四轮爆胎了！',
  })
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
  <Notification />
</Row>
```
