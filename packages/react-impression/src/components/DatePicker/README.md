### 示例

**基本用法**

```js
<Row>
  <Col>
    <Form>
      <FormGroup>
        <label>默认:</label>
        <Input type="date" style={{ width: 224 }} />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>默认值（非受控组件）:</label>
        <Input type="date" defaultValue="2018-09-20" style={{ width: 224 }} />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>禁用状态:</label>
        <Input
          type="date"
          defaultValue="2018-09-20"
          style={{ width: 224 }}
          disabled
        />
      </FormGroup>
    </Form>
  </Col>
</Row>
```

**限制日期**

```js
<Row>
  <Col>
    <Form>
      <FormGroup>
        <label>最小值:</label>
        <Input
          type="date"
          defaultValue="2018-09-20"
          minDate="2018-06-15"
          style={{ width: 224 }}
        />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>最大值:</label>
        <Input
          type="date"
          defaultValue="2018-09-20"
          maxDate="2018-06-30"
          style={{ width: 224 }}
        />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>设置每周第一天是星期几:</label>
        <Input
          type="date"
          defaultValue="2018-09-20"
          firstDayOfWeek={1}
          style={{ width: 224 }}
        />
      </FormGroup>
    </Form>
  </Col>
</Row>
```

**格式化**

```js
<Row>
  <Col>
    <Form>
      <FormGroup>
        <label>年-月-日:</label>
        <Input
          type="date"
          defaultValue="2018-9-20"
          format="Y-M-D"
          style={{ width: 224 }}
        />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>年/月月/日日:</label>
        <Input
          type="date"
          defaultValue="2018/09/20"
          format="YYYY/MM/DD"
          style={{ width: 224 }}
        />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>年月日:</label>
        <Input
          type="date"
          defaultValue="2018年09月20日"
          format="YYYY年MM月DD日"
          style={{ width: 224 }}
        />
      </FormGroup>
    </Form>
  </Col>
</Row>
```

**月份选择**

```js
<Row>
  <Col>
    <Input type="month" style={{ width: 224 }} />
  </Col>
</Row>
```

**年份选择**

```js
<Row>
  <Col>
    <Input
      type="year"
      defaultValue="2018"
      minDate="2014"
      maxDate="2019"
      style={{ width: 224 }}
    />
  </Col>
</Row>
```

### 变更记录

* 新增 type 属性`year`值，支持选择年份
