### 示例

**基本用法**

```js

<DatePicker className='offset-r' type='dateTime' />
<DatePicker className='offset-r'/>
<DatePicker className='offset-r' type='year' />
<DatePicker type='month' />
```

#### 配合 Input 组件使用

**基本用法**

```js
const handleChange = dayFormat => {
  setState({ defaultDate: dayFormat })
  console.log('Change: ', dayFormat)
}
initialState = {
  defaultDate: '',
}
;<Row>
  <Col>
    <Form>
      <FormGroup>
        <label>受控: </label>
        <Input type="date" value={state.defaultDate} onChange={handleChange} />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>默认值（非受控组件）:</label>
        <Input type="date" defaultValue="2018-09-20" timeSelect />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>禁用状态:</label>
        <Input type="date" defaultValue="2018-09-20" disabled />
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
          minDate="2018-09-01"
          timeSelect
        />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>最大值:</label>
        <Input type="date" defaultValue="2018-09-20" maxDate="2018-09-25" />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>设置每周第一天是星期几:</label>
        <Input type="date" defaultValue="2018-09-20" firstDayOfWeek={1} />
      </FormGroup>
    </Form>
  </Col>
</Row>
注：限制无法对时间日期选择的时分秒生效
```

**格式化**

```js
<Row>
  <Col>
    <Form>
      <FormGroup>
        <label>年-月-日:</label>
        <Input type="date" defaultValue="2018-9-20" format="Y-M-D HH:mm:ss" />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>年/月月/日日:</label>
        <Input type="date" defaultValue="2018/09/20" format="YYYY/MM/DD" />
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
    <Input type="month" />
  </Col>
</Row>
```

**年份选择**

```js
<Row>
  <Col>
    <Input type="year" defaultValue="2018" minDate="2014" maxDate="2019" />
  </Col>
</Row>
```

**时间选择**

```js
<Row>
  <Col>
    <Input type="dateTime" />
  </Col>
</Row>
```

### 变更记录

v3.0.0

- 新增 type 属性有效值：dateTime，支持选择时间
