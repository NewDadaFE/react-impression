### 示例

**基本用法**

```js
<TimeSelect className='offset-r-lg' type='time' />
<TimeSelect className='offset-r-lg' type='second' />
```

#### 配合 Input 组件使用

**基本用法**

```js
<div>
  <Row>
    <Col>
      <Form>
        <FormGroup>
          <label>时分控件:</label>
          <Input type="time" />
        </FormGroup>
      </Form>
    </Col>
    <Col>
      <Form>
        <FormGroup>
          <label>时分秒控件:</label>
          <Input type="second" defaultValue="02:04:22" />
        </FormGroup>
      </Form>
    </Col>
    <Col>
      <Form>
        <FormGroup>
          <label>默认值（非受控组件）:</label>
          <Input type="time" defaultValue="02:04" />
        </FormGroup>
      </Form>
    </Col>
  </Row>
  <Row>
    <Col>
      <Form>
        <FormGroup>
          <label>禁用状态:</label>
          <Input type="time" defaultValue="02:04" disabled />
        </FormGroup>
      </Form>
    </Col>
  </Row>
</div>
```

### 变更记录

- 新增 type 属性`time`值，支持选择时分，属性`second`值，支持选择时分秒
