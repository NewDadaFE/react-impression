### Examples

**Basic**

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

**Link color**

```js
<Row>
  <Col>
    <Attention theme='success'>
      You successfully read this important attention message
      <AttentionLink href='#'> click here</AttentionLink>
    </Attention>
  </Col>
</Row>
<Row>
  <Col>
    <Attention theme='primary'>
      This attention needs your attention, but it&apos;s not super
      important
      <AttentionLink href='#'> click here</AttentionLink>
    </Attention>
  </Col>
</Row>
<Row>
  <Col>
    <Attention theme='warning'>
      Better check yourself, you&apos;re not looking too good
      <AttentionLink href='#'> click here</AttentionLink>
    </Attention>
  </Col>
</Row>
<Row>
  <Col>
    <Attention theme='danger'>
      Change a few things up and try submitting again
      <AttentionLink href='#'> click here</AttentionLink>
    </Attention>
  </Col>
</Row>
```

**Dismissible**

```js
<Attention theme='success' closeable>
  You successfully read this important attention message
  <AttentionLink href='#'> click here</AttentionLink>
</Attention>
```