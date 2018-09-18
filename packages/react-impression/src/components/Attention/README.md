### 示例

**基本用法**

```js
<Row>
  <Col>
    <Attention theme='success'>
      你成功完成了这个任务
    </Attention>
  </Col>
</Row>
<Row>
  <Col>
    <Attention theme='primary'>
      接下来你将听到很重要的消息
    </Attention>
  </Col>
</Row>
<Row>
  <Col>
    <Attention theme='warning'>
      要多注意自己的行为，你现在状态很差；要多注意自己的行为，你现在状态很差；要多注意自己的行为，你现在状态很差；重要的事情说三遍
    </Attention>
  </Col>
</Row>
<Row>
  <Col col='12'>
    <Attention theme='danger'>
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

**带有链接的**

```js
<Row>
  <Col>
    <Attention theme='success'>
      你成功完成了这个任务<AttentionLink href='#'>点击这里</AttentionLink>
    </Attention>
  </Col>
</Row>
<Row>
  <Col>
    <Attention theme='primary'>
      接下来你将接收到很重要的消息<AttentionLink href='#'>点击这里</AttentionLink>
    </Attention>
  </Col>
</Row>
<Row>
  <Col>
    <Attention theme='warning'>
      要多注意自己的行为，你现在状态很差<AttentionLink href='#'>点击这里</AttentionLink>
    </Attention>
  </Col>
</Row>
<Row>
  <Col>
    <Attention theme='danger'>
      请检查代码之后重新提交<AttentionLink href='#'>点击这里</AttentionLink>
    </Attention>
  </Col>
</Row>
```
