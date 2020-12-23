### 示例

<style type='text/css'>
.row > div > div {
  background-color: #008CF0;
  color: white;
  text-align: center;
}
</style>

```javascript
<Row>
  <Col>
    <div>1</div>
  </Col>
  <Col>
    <div>1</div>
  </Col>
  <Col>
    <div>1</div>
  </Col>
  <Col>
    <div>1</div>
  </Col>
  <Col>
    <div>1</div>
  </Col>
  <Col>
    <div>1</div>
  </Col>
  <Col>
    <div>1</div>
  </Col>
  <Col>
    <div>1</div>
  </Col>
  <Col>
    <div>1</div>
  </Col>
  <Col>
    <div>1</div>
  </Col>
  <Col>
    <div>1</div>
  </Col>
  <Col>
    <div>1</div>
  </Col>
</Row>
<Row>
  <Col col={6}>
    <div>6</div>
  </Col>
  <Col pull={2} col={6}>
    <div className='bg-secondary' style={{ opacity: .6 }}>
      pull=2 col=6
    </div>
  </Col>
</Row>
<Row>
  <Col offset={2} col={9}>
    <div>offset=2 col=9</div>
  </Col>
  <Col col={1}>
   <div className='bg-secondary'>1</div>
  </Col>
</Row>
<Row>
  <Col offset={1} push={2} col={9}>
    <div>offset=1 push=2 col=9</div>
  </Col>
</Row>
```

#### offset 和 push 的区别

offset 属性原理是设置 margin-left，push 属性原理是设置 left。所以使用 offset 做左侧间距时，会对后面的 Col 有影响，而 push 则不会。

**1、offset 属性**

offset + col 总数 = 3 + (9 + 1) = 13 > 12，超出 12 栅格的部分会换行。

```javascript
<Row>
  <Col offset={3} col={9}>
    <div>offset=3 col=9</div>
  </Col>
  <Col col={1}>
    <div className="bg-secondary">1</div>
  </Col>
</Row>
```

**2、push 属性**

push 的偏移效果只会作用在设置的 Col 组件上。

```javascript
<Row>
  <Col push={3} col={9}>
    <div>push=3 col=9</div>
  </Col>
  <Col col={1}>
    <div className="bg-secondary">1</div>
  </Col>
</Row>
```
