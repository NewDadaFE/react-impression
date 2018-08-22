### 示例

**主题**

```js
const buttonClickHandle = () => {
  console.log('Button clicked')
}
;<Row className="no-margin">
  <Col col="2">
    <CardBlock>
      <Button type="button" theme="primary" onClick={buttonClickHandle}>
        主题色
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="default">默认</Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="secondary">副主题色</Button>
    </CardBlock>
  </Col>
</Row>
```

**不可用状态**

```js
const buttonClickHandle = () => {
  console.log('Button clicked')
}
;<Row className="no-margin">
  <Col col="2">
    <CardBlock>
      <Button
        disabled
        type="button"
        theme="primary"
        onClick={buttonClickHandle}
      >
        主题色
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button disabled theme="default">
        默认
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button disabled theme="secondary">
        副主题色
      </Button>
    </CardBlock>
  </Col>
</Row>
```

**尺寸**

```js
<Row className="no-margin">
  <Col col="4">
    <CardBlock>
      <Button theme="primary" size="sm">
        小的型号
      </Button>
    </CardBlock>
  </Col>
  <Col col="4">
    <CardBlock>
      <Button theme="primary">普通大小</Button>
    </CardBlock>
  </Col>
  <Col col="4">
    <CardBlock>
      <Button theme="primary" size="lg">
        大的型号
      </Button>
    </CardBlock>
  </Col>
</Row>
```

**链接**

```js
<Row className="no-margin">
  <Col col="2">
    <CardBlock>
      <Button theme="primary" href="https://www.github.com">
        主题色
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="default" href="https://www.github.com">
        默认
      </Button>
    </CardBlock>
  </Col>
  <Col col="2">
    <CardBlock>
      <Button theme="secondary" href="https://www.github.com">
        副主题色
      </Button>
    </CardBlock>
  </Col>
</Row>
```
