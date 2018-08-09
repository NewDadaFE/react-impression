### Examples

**Basic**

```js
<Row>
  <Col>
    <Form>
      <FormGroup>
        <label>basic:</label>
        <Input type="date" />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>defaultValue:</label>
        <Input type="date" defaultValue="2016-05-29" />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>disabled:</label>
        <Input type="date" defaultValue="2016-05-29" disabled />
      </FormGroup>
    </Form>
  </Col>
</Row>
```

**Limit**

```js
<Row>
  <Col>
    <Form>
      <FormGroup>
        <label>min:</label>
        <Input type="date" defaultValue="2016-05-29" minDate="2016-05-15" />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>max:</label>
        <Input type="date" defaultValue="2016-05-29" maxDate="2016-05-31" />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>first day:</label>
        <Input type="date" defaultValue="2016-05-29" firstDayOfWeek={1} />
      </FormGroup>
    </Form>
  </Col>
</Row>
```

**Format**

```js
<Row>
  <Col>
    <Form>
      <FormGroup>
        <label>Y-M-D:</label>
        <Input type="date" defaultValue="2016-5-29" format="Y-M-D" />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>Y/MM/DD:</label>
        <Input type="date" defaultValue="2016/05/29" format="YYYY/MM/DD" />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>年月日:</label>
        <Input
          type="date"
          defaultValue="2016年05月29日"
          format="YYYY年MM月DD日"
        />
      </FormGroup>
    </Form>
  </Col>
</Row>
```

**Month**

```js
<Row>
  <Col>
    <Form>
      <FormGroup>
        <label>年月:</label>
        <Input type="month" />
      </FormGroup>
    </Form>
  </Col>
</Row>
```
