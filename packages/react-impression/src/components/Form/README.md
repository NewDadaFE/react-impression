### Examples

**Inline**

```js
<Form>
  <Form.Group>
    <label>Name:</label>
    <Input type="text" placeholder="Jane Doe" />
  </Form.Group>
  <Form.Group>
    <label>Email</label>
    <Input type="text" placeholder="hello@example.com" />
  </Form.Group>
  <Form.Group>
    <Checkbox defaultChecked>Remember me</Checkbox>
  </Form.Group>
  <Button theme="primary">Search</Button>
</Form>
```

**Horizontal**

```js
<Form type="horizontal">
  <Form.Group>
    <Col col="2" className="text-right">
      <Form.Control.Label>Email:</Form.Control.Label>
    </Col>
    <Col col="10">
      <Input type="text" placeholder="Email" />
    </Col>
  </Form.Group>
  <Form.Group>
    <Col col="2" className="text-right">
      <Form.Control.Label>name:</Form.Control.Label>
    </Col>
    <Col col="10">
      <Input type="password" />
    </Col>
  </Form.Group>
  <Form.Group>
    <Col col="2" className="text-right">
      <Form.Control.Label>description:</Form.Control.Label>
    </Col>
    <Col col="10">
      <Input type="textarea" />
    </Col>
  </Form.Group>
  <Form.Group className="offset-b-lg">
    <Col col="2" className="text-right">
      <Form.Control.Label>Radios:</Form.Control.Label>
    </Col>
    <Col col="10">
      <RadioGroup direction="column">
        <Radio>
          Option one is this and that&mdash;be sure to include why it&apos;s
          great
        </Radio>
        <Radio>
          Option one is this and that&mdash;be sure to include why it&apos;s
          great
        </Radio>
        <Radio>
          Option one is this and that&mdash;be sure to include why it&apos;s
          great
        </Radio>
        <Radio>
          Option one is this and that&mdash;be sure to include why it&apos;s
          great
        </Radio>
      </RadioGroup>
    </Col>
  </Form.Group>
  <Form.Group>
    <Col col="2" offset="2">
      <Button theme="primary">Sign in</Button>
    </Col>
    <Col col="2">
      <Button theme="default">Cancel</Button>
    </Col>
  </Form.Group>
</Form>
```
