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
          <Icon
            type="times"
            onClick={() => {
              // this.refs.clearInput.setValue('');
              // this.refs.clearInput.focus();
            }}
          />
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

**Date**

```js
<Row>
  <Col>
    <Form>
      <Form.Group>
        <label>basic:</label>
        <Input type="date" />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>defaultVal:</label>
        <Input type="date" defaultValue="2016-05-29" />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>disabled:</label>
        <Input type="date" defaultValue="2016-05-29" disabled />
      </Form.Group>
    </Form>
  </Col>
</Row>
```

**Search**

```js
<Row>
  <Col>
    <Form>
      <Form.Group>
        <label>basic:</label>
        <Input
          type="search"
          onClick={this.toggleModalHandle}
          value={this.state.city.name}
        />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>addon:</label>
        <Input
          type="search"
          onClick={this.toggleModalHandle}
          value={this.state.city.name}
        >
          <Icon type="map-marker" />
        </Input>
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>disabled:</label>
        <Input type="search" value="上海" disabled />
      </Form.Group>
    </Form>
  </Col>
</Row>
```

**file**

```js
<Row>
  <Col>
    <Form>
      <Form.Group>
        <label>basic:</label>
        <Input
          type="search"
          onClick={this.toggleModalHandle}
          value={this.state.city.name}
        />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>addon:</label>
        <Input
          type="search"
          onClick={this.toggleModalHandle}
          value={this.state.city.name}
        >
          <Icon type="map-marker" />
        </Input>
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>disabled:</label>
        <Input type="search" value="上海" disabled />
      </Form.Group>
    </Form>
  </Col>
</Row>
```
