### Examples

**Text**

```js
<Row>
  <Col>
    <Form>
      <Form.Group>
        <label>basic:</label>
        <Input type="text" />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>addon:</label>
        <Input type="text" ref="clearInput" defaultValue="text">
          <Icon type="times" onClick={this.clearInputHandle} />
        </Input>
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>pill shape:</label>
        <Input type="text" defaultValue="something" pill>
          <Icon type="search" />
        </Input>
      </Form.Group>
    </Form>
  </Col>
</Row>
```

**disabled**

```js
<Form>
  <Form.Group>
    <label>Disabled</label>
    <Radio disabled>Yes</Radio>
  </Form.Group>
</Form>
```
