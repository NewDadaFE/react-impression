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
        primary
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="default">default</Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="secondary">secondary</Button>
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
        primary
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="default" outline>
        default
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="secondary" outline>
        secondary
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
        Sm
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="primary">Normal</Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="primary" size="lg">
        Large
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
        primary
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="default" shape="pill">
        default
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="secondary" shape="pill">
        secondary
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
        primary
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="default" href="https://www.github.com">
        default
      </Button>
    </Card.Block>
  </Col>
  <Col col="2">
    <Card.Block>
      <Button theme="secondary" href="https://www.github.com">
        secondary
      </Button>
    </Card.Block>
  </Col>
</Row>
```
