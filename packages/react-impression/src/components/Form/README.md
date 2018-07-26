### Examples

**Inline**

```js
<Form>
  <FormGroup>
    <label>Name:</label>
    <Input type="text" placeholder="Jane Doe" />
  </FormGroup>
  <FormGroup>
    <label>Email</label>
    <Input type="text" placeholder="hello@example.com" />
  </FormGroup>
  <FormGroup>
    <Checkbox defaultChecked>Remember me</Checkbox>
  </FormGroup>
  <Button theme="primary">Search</Button>
</Form>
```

**Horizontal**

```js
<Form type="horizontal">
  <FormGroup>
    <Col col="2" className="text-right">
      <FormControlLabel>Email:</FormControlLabel>
    </Col>
    <Col col="10">
      <Input type="text" placeholder="Email" />
    </Col>
  </FormGroup>
  <FormGroup>
    <Col col="2" className="text-right">
      <FormControlLabel>name:</FormControlLabel>
    </Col>
    <Col col="10">
      <Input type="password" />
    </Col>
  </FormGroup>
  <FormGroup>
    <Col col="2" className="text-right">
      <FormControlLabel>description:</FormControlLabel>
    </Col>
    <Col col="10">
      <Input type="textarea" />
    </Col>
  </FormGroup>
  <FormGroup className="offset-b-lg">
    <Col col="2" className="text-right">
      <FormControlLabel>Radios:</FormControlLabel>
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
  </FormGroup>
  <FormGroup>
    <Col col="2" offset="2">
      <Button theme="primary">Sign in</Button>
    </Col>
    <Col col="2">
      <Button theme="default">Cancel</Button>
    </Col>
  </FormGroup>
</Form>
```
