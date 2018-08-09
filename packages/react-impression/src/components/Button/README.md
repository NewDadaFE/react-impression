### 示例

**主题**

```js
const buttonClickHandle = () => {
  console.log('Button clicked')
}
;<Row className="no-margin">
  <Col col="2">
    <Card.Block>
      <Button type="button" theme="primary" onClick={buttonClickHandle}>
        主题色
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="default">默认</Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="secondary">副主题色</Button>
    </Card.Block>
  </Col>
</Row>
```

**外轮廓**

```js
<Row className="no-margin bg-inverse">
  <Col col="2">
    <Card.Block>
      <Button theme="primary" outline>
        主题色
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="default" outline>
        默认
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="secondary" outline>
        副主题色
      </Button>
    </Card.Block>
  </Col>
</Row>
```

**尺寸**

```js
<Row className="no-margin">
  <Col col="2">
    <Card.Block>
      <Button theme="primary" size="sm">
        小
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="primary">普通大小</Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="primary" size="lg">
        大
      </Button>
    </Card.Block>
  </Col>
</Row>
```

**圆角**

```js
<Row className="no-margin">
  <Col col="2">
    <Card.Block>
      <Button theme="primary" shape="pill">
        主题色
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="default" shape="pill">
        默认
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="secondary" shape="pill">
        副主题色
      </Button>
    </Card.Block>
  </Col>
</Row>
```

**链接**

```js
<Row className="no-margin">
  <Col col="2">
    <Card.Block>
      <Button theme="primary" href="https://www.github.com">
        主题色
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="default" href="https://www.github.com">
        默认
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="secondary" href="https://www.github.com">
        副主题色
      </Button>
    </Card.Block>
  </Col>
</Row>
```
