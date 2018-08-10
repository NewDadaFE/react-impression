### 示例

**基本用法**

```js
<Row>
  <Col>
    <Progress value='1' />
  </Col>
</Row>
<Row>
  <Col>
    <Progress value='25' />
  </Col>
</Row>
<Row>
  <Col>
    <Progress value='50' />
  </Col>
</Row>
<Row>
  <Col>
    <Progress value='75' />
  </Col>
</Row>
```

**自定义主题**

```js
<Row>
  <Col>
    <Progress value='50' />
  </Col>
</Row>
<Row>
  <Col>
    <Progress value='50' theme='success' />
  </Col>
</Row>
<Row>
  <Col>
    <Progress value='50' theme='warning' />
  </Col>
</Row>
<Row>
  <Col>
    <Progress value='50' theme='danger' />
  </Col>
</Row>
```

**斑马线风格**

```js
<Row>
  <Col>
    <Progress value='50' striped />
  </Col>
</Row>
<Row>
  <Col>
    <Progress value='50' theme='success' striped />
  </Col>
</Row>
<Row>
  <Col>
    <Progress value='50' theme='warning' striped />
  </Col>
</Row>
<Row>
  <Col>
    <Progress value='50' theme='danger' striped />
  </Col>
</Row>
```

### 变更记录

v 2.0.0

- 新增 strokeWidth 属性
- 新增 showInfo 属性
- 新增 formatter 属性
- 新增 progress-bar-striped-bg-image sass 变量
- 新增 progress-bar-striped-box-shadow sass 变量
- 新增 progress-bar-striped-bg-size sass 变量
- 新增 progress-info-default-color sass 变量
- 新增 progress-info-width sass 变量
- 新增 progress-info-margin-left sass 变量
- 新增 progress-info-font-size sass 变量
