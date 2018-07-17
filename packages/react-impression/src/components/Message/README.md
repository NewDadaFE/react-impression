### Examples

```js
const handleShowInfo = () => {
  Message.info('你好，这是一条info消息！')
};
const handleShowSuccess = () => {
  Message.success('你好，这是一条success消息！')
};
const handleShowWarning = () => {
  Message.warning('你好，这是一条warning消息！')
};
const handleShowError = () => {
  Message.error('你好，这是一条error消息！')
};
const handleShowLoading = () => {
  Message.loading('正在执行中...', 0)
  // 4秒后关闭
  setTimeout(() => {
    Message.hideMessage()
  }, 4000)
};
<Row>
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
