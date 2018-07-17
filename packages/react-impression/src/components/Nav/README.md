### Example

**Inline**

```js
<Nav activeKey={1} type="inline">
  <NavItem eventKey={1}>Active</NavItem>
  <NavItem eventKey={2}>Link</NavItem>
  <NavItem eventKey={3}>Anothor link</NavItem>
  <NavItem eventKey={4} disabled>Disabled</NavItem>
</Nav>
```

**Tab**

```js
<Nav activeKey={1} type="tab">
  <NavItem eventKey={1}>Active</NavItem>
  <NavItem eventKey={2}>Link</NavItem>
  <NavItem eventKey={3}>Anothor link</NavItem>
  <NavItem eventKey={4} disabled>Disabled</NavItem>
</Nav>
```

**Pill**

```js
<Nav activeKey={1} type="pill">
  <NavItem eventKey={1}>Active</NavItem>
  <NavItem eventKey={2}>Link</NavItem>
  <NavItem eventKey={3}>Anothor link</NavItem>
  <NavItem eventKey={4} disabled>Disabled</NavItem>
</Nav>
```

**Inline Bordered**

```js
<Nav activeKey={1} type="inline-bordered">
  <NavItem eventKey={1}>Active</NavItem>
  <NavItem eventKey={2}>Link</NavItem>
  <NavItem eventKey={3}>Anothor link</NavItem>
  <NavItem eventKey={4} disabled>Disabled</NavItem>
</Nav>
```

**Stacked Pill**

```js
<Row>
  <Col col="3">
    <Card>
      <Nav activeKey={2} type="pill" stacked>
        <NavItem eventKey={1}>Active</NavItem>
        <NavItem eventKey={2}>Link</NavItem>
        <NavItem eventKey={3}>Anothor link</NavItem>
        <NavItem eventKey={4} disabled>Disabled</NavItem>
      </Nav>
    </Card>
  </Col>
</Row>
```