### Examples

**basic**

```js
<Row>
  <Col>
    <InputGroup>
      <InputGroupAddon>@</InputGroupAddon>
      <InputGroupInput placeholder="something" />
    </InputGroup>
  </Col>
  <Col>
    <InputGroup>
      <InputGroupInput placeholder="something" />
      <InputGroupAddon>@</InputGroupAddon>
    </InputGroup>
  </Col>
  <Col>
    <InputGroup>
      <InputGroupAddon>@</InputGroupAddon>
      <InputGroupInput placeholder="something" />
      <InputGroupAddon>@</InputGroupAddon>
    </InputGroup>
  </Col>
  <Col>
    <InputGroup>
      <InputGroupAddon pure>+86</InputGroupAddon>
      <InputGroupInput placeholder="phone" />
    </InputGroup>
  </Col>
</Row>
```

**size**

```js
<Row>
  <Col col="3">
    <InputGroup size="sm">
      <InputGroupInput placeholder="something" />
      <InputGroupButton theme="primary">Search</InputGroupButton>
    </InputGroup>
  </Col>
  <Col col="4">
    <InputGroup>
      <InputGroupInput placeholder="something" />
      <InputGroupButton theme="primary">Search</InputGroupButton>
    </InputGroup>
  </Col>
  <Col col="5">
    <InputGroup size="lg">
      <InputGroupInput placeholder="something" />
      <InputGroupButton theme="primary">Search</InputGroupButton>
    </InputGroup>
  </Col>
</Row>
```
