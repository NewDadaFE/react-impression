### 示例

**基本使用**

```js
<Row>
  <Col>
    <Badge content="3">
      <div className="bg-default" style={{ width: 50, height: 50 }} />
    </Badge>
    <p className="text-primary">主题色</p>
  </Col>
  <Col>
    <Badge content="16" theme="secondary">
      <div className="bg-default" style={{ width: 50, height: 50 }} />
    </Badge>
    <p className="text-secondary">副主题色</p>
  </Col>
  <Col>
    <Badge content="25" theme="danger">
      <div className="bg-default" style={{ width: 50, height: 50 }} />
    </Badge>
    <p className="text-danger">危险</p>
  </Col>
  <Col>
    <Badge content="33" theme="success">
      <div className="bg-default" style={{ width: 50, height: 50 }} />
    </Badge>
    <p className="text-success">成功</p>
  </Col>
  <Col>
    <Badge content="99+" theme="inverse">
      <div className="bg-default" style={{ width: 50, height: 50 }} />
    </Badge>
    <p>反转</p>
  </Col>
</Row>
```

**小圆点**

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

**状态点**

```js
<Row>
  <Col>
    <Badge type="legend">主题色</Badge>
  </Col>
  <Col>
    <Badge type="legend" theme="danger">
      危险
    </Badge>
  </Col>
  <Col>
    <Badge type="legend" theme="warning">
      警告
    </Badge>
  </Col>
  <Col>
    <Badge type="legend" theme="success">
      成功
    </Badge>
  </Col>
</Row>
```
