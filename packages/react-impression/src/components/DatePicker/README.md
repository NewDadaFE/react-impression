### Examples

**Basic**

```js
<Row>
  <Col>
    <Form>
      <Form.Group>
        <label>basic:</label>
        <Input type='date' />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>defaultValue:</label>
        <Input type='date' defaultValue='2016-05-29' />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>disabled:</label>
        <Input type='date' defaultValue='2016-05-29' disabled />
      </Form.Group>
    </Form>
  </Col>
</Row>
````

**Limit**

```js
<Row>
  <Col>
    <Form>
      <Form.Group>
        <label>min:</label>
        <Input
          type='date'
          defaultValue='2016-05-29'
          minDate='2016-05-15'
        />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>max:</label>
        <Input
          type='date'
          defaultValue='2016-05-29'
          maxDate='2016-05-31'
        />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>first day:</label>
        <Input
          type='date'
          defaultValue='2016-05-29'
          firstDayOfWeek={1}
        />
      </Form.Group>
    </Form>
  </Col>
</Row>
```

**Format**

```js
<Row>
  <Col>
    <Form>
      <Form.Group>
        <label>Y-M-D:</label>
        <Input
          type='date'
          defaultValue='2016-5-29'
          format='Y-M-D'
        />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>Y/MM/DD:</label>
        <Input
          type='date'
          defaultValue='2016/05/29'
          format='YYYY/MM/DD'
        />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>年月日:</label>
        <Input
          type='date'
          defaultValue='2016年05月29日'
          format='YYYY年MM月DD日'
        />
      </Form.Group>
    </Form>
  </Col>
</Row>
```

**Month**

```js
<Row>
  <Col>
    <Form>
      <Form.Group>
        <label>年月:</label>
        <Input type='month' />
      </Form.Group>
    </Form>
  </Col>
</Row>
