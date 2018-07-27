### 示例

**Basic**

```js
<Row>
  <Col>
    <Badge content="3">
      <div className="bg-default" style={{ width: 50, height: 50 }} />
    </Badge>
    <p className="text-primary">primary</p>
  </Col>
  <Col>
    <Badge content="16" theme="secondary">
      <div className="bg-default" style={{ width: 50, height: 50 }} />
    </Badge>
    <p className="text-secondary">secondary</p>
  </Col>
  <Col>
    <Badge content="25" theme="danger">
      <div className="bg-default" style={{ width: 50, height: 50 }} />
    </Badge>
    <p className="text-danger">danger</p>
  </Col>
  <Col>
    <Badge content="33" theme="success">
      <div className="bg-default" style={{ width: 50, height: 50 }} />
    </Badge>
    <p className="text-success">success</p>
  </Col>
  <Col>
    <Badge content="99+" theme="inverse">
      <div className="bg-default" style={{ width: 50, height: 50 }} />
    </Badge>
    <p>inverse</p>
  </Col>
</Row>
```

**Dot**

```js
<Row>
  <Col>
    <Badge>
      <Icon size="lg" type="bell" />
    </Badge>
  </Col>
  <Col>
    <Badge theme="danger">
      <Icon size="lg" type="bell-o" />
    </Badge>
  </Col>
  <Col>
    <Badge theme="danger">
      <Icon size="lg" type="envelope-o" />
    </Badge>
  </Col>
  <Col>
    <Badge theme="danger">
      <Icon size="lg" type="bullhorn" />
    </Badge>
  </Col>
</Row>
```

**Legend**

```js
<Row>
  <Col>
    <Badge type="legend">primary</Badge>
  </Col>
  <Col>
    <Badge type="legend" theme="danger">
      danger
    </Badge>
  </Col>
  <Col>
    <Badge type="legend" theme="warning">
      warning
    </Badge>
  </Col>
  <Col>
    <Badge type="legend" theme="success">
      success
    </Badge>
  </Col>
</Row>
```
