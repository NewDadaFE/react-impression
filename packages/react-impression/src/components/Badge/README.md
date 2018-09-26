### 示例

**基本**

```js
const style = {
  width: 40,
  height: 40,
  backgroundColor: 'rgba(233, 235, 240, 1)',
  borderRadius: 2,
}
;<Row>
  <Col>
    <Badge content="99+">
      <div style={style} />
    </Badge>
  </Col>
  <Col>
    <Badge content="60">
      <div style={style} />
    </Badge>
  </Col>
  <Col>
    <Badge>
      <div style={style} />
    </Badge>
  </Col>
</Row>
```

**基本（橙色）**

```js
const style = {
  width: 40,
  height: 40,
  backgroundColor: 'rgba(233, 235, 240, 1)',
  borderRadius: 2,
}
;<Row>
  <Col>
    <Badge content="99+" theme="secondary">
      <div style={style} />
    </Badge>
  </Col>
  <Col>
    <Badge content="60" theme="secondary">
      <div style={style} />
    </Badge>
  </Col>
  <Col>
    <Badge theme="secondary">
      <div style={style} />
    </Badge>
  </Col>
</Row>
```
