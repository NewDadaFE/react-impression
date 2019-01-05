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

**四种主题**

```js
<Row>
  <Col>
    <Progress value='30' />
  </Col>
</Row>
<Row>
  <Col>
    <Progress value='20' theme='success' />
  </Col>
</Row>
<Row>
  <Col>
    <Progress value='10' theme='warning' />
  </Col>
</Row>
<Row>
  <Col>
    <Progress value='8' theme='danger' />
  </Col>
</Row>
```

### 变更记录

v 2.0.0

- 新增 strokeWidth 属性
- 新增 showInfo 属性
- 新增 formatter 属性
- 移除 striped 属性
- 新增 progress-info-default-color sass 变量
- 新增 progress-info-width sass 变量
- 新增 progress-info-margin-left sass 变量
- 新增 progress-info-font-size sass 变量
- 移除 progress-box-shadow sass 变量
