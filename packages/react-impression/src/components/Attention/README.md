### 示例

**基本使用**

```js
<Row>
  <Col>
    <Attention theme='success'>
      <strong>Well done!</strong>
      You successfully read this important attention message.
    </Attention>
  </Col>
</Row>
<Row>
  <Col>
    <Attention theme='primary'>
      <strong>Heads up!</strong>
      This attention needs your attention, but it&apos;s not super important.
    </Attention>
  </Col>
</Row>
<Row>
  <Col>
    <Attention theme='warning'>
      <strong>Warning!</strong>
      Better check yourself, you&apos;re not looking too good.
    </Attention>
  </Col>
</Row>
<Row>
  <Col col='12'>
    <Attention theme='danger'>
      <strong>Oh snap!</strong>
      Change a few things up and try submitting again.
    </Attention>
  </Col>
</Row>
```

**可关闭的**

```js
<Attention theme="success" closeable>
  You successfully read this important attention message
  <AttentionLink href="#"> click here</AttentionLink>
</Attention>
```
