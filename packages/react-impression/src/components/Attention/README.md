### 示例

**基本用法**

```js
<Row>
  <Col>
    <Attention theme='success'>
      <strong>干得不错!</strong>
      你成功完成了这个任务
    </Attention>
  </Col>
</Row>
<Row>
  <Col>
    <Attention theme='primary'>
      <strong>请看着我，</strong>
      接下来你将听到很重要的消息
    </Attention>
  </Col>
</Row>
<Row>
  <Col>
    <Attention theme='warning'>
      <strong>要小心!</strong>
      要多注意自己的行为，你现在状态很差
    </Attention>
  </Col>
</Row>
<Row>
  <Col col='12'>
    <Attention theme='danger'>
      <strong>审核失败!</strong>
      请检查代码之后重新提交
    </Attention>
  </Col>
</Row>
```

**可关闭的**

```js
<Attention theme="success" closeable>
  你成功完成了这个任务
</Attention>
```
