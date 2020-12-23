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
  <Row>
    <Col>
      <Form>
        <FormGroup>
          <label>自动关闭:</label>
          <Input type="time" defaultValue="02:04" autoClose />
        </FormGroup>
      </Form>
    </Col>
    <Col>
      <Form>
        <FormGroup>
          <label>二次确认:</label>
          <Input type="time" defaultValue="02:04" />
        </FormGroup>
      </Form>
    </Col>
  </Row>
</div>
```

### 变更记录

v3.0.0

- 新增 autoClose 属性，控制选完时间是否会自动关闭面板，或者进行二次确定
