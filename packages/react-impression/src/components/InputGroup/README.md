### Examples

**basic**

```js
<Row>
  <Col>
    <InputGroup>
      <InputGroup.Addon>@</InputGroup.Addon>
      <InputGroup.Input placeholder="something" />
    </InputGroup>
  </Col>
  <Col>
    <InputGroup>
      <InputGroup.Input placeholder="something" />
      <InputGroup.Addon>@</InputGroup.Addon>
    </InputGroup>
  </Col>
  <Col>
    <InputGroup>
      <InputGroup.Addon>@</InputGroup.Addon>
      <InputGroup.Input placeholder="something" />
      <InputGroup.Addon>@</InputGroup.Addon>
    </InputGroup>
  </Col>
  <Col>
    <InputGroup>
      <InputGroup.Addon pure>+86</InputGroup.Addon>
      <InputGroup.Input placeholder="phone" />
    </InputGroup>
  </Col>
</Row>
```

**size**

```js
<Row>
  <Col col="3">
    <InputGroup size="sm">
      <InputGroup.Input placeholder="something" />
      <InputGroup.Button theme="primary">Search</InputGroup.Button>
    </InputGroup>
  </Col>
  <Col col="4">
    <InputGroup>
      <InputGroup.Input placeholder="something" />
      <InputGroup.Button theme="primary">Search</InputGroup.Button>
    </InputGroup>
  </Col>
  <Col col="5">
    <InputGroup size="lg">
      <InputGroup.Input placeholder="something" />
      <InputGroup.Button theme="primary">Search</InputGroup.Button>
    </InputGroup>
  </Col>
</Row>
```
