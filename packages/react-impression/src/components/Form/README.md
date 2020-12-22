### 示例

**行内表单**

```js
<Form>
  <FormGroup>
    <label>姓名</label>
    <Input type="text" placeholder="Jane Doe" />
  </FormGroup>
  <FormGroup>
    <label>邮箱</label>
    <Input type="text" placeholder="hello@example.com" />
  </FormGroup>
  <FormGroup>
    <label>电话</label>
    <Input type="text" placeholder="15698801833" />
  </FormGroup>
  <FormGroup>
    <label>联系人</label>
    <Input type="text" placeholder="填写联系人" />
  </FormGroup>
  <FormGroup>
    <label>爱好</label>
    <Input type="text" placeholder="编程" />
  </FormGroup>
  <FormGroup>
    <Checkbox defaultChecked>记住我</Checkbox>
  </FormGroup>
  <FormGroup>
    <Button theme="secondary">搜索</Button>
    <Button theme="secondary" style={{ marginLeft: 20 }}>
      重置
    </Button>
  </FormGroup>
</Form>
```

**表单示例**

```js
<Form type="horizontal">
  <FormGroup>
    <Col col="2" className="text-right">
      <FormControlLabel>邮箱:</FormControlLabel>
    </Col>
    <Col col="10">
      <Input type="text" placeholder="hello@example.com" />
    </Col>
  </FormGroup>
  <FormGroup>
    <Col col="2" className="text-right">
      <FormControlLabel>姓名:</FormControlLabel>
    </Col>
    <Col col="10">
      <Input type="password" />
    </Col>
  </FormGroup>
  <FormGroup>
    <Col col="2" className="text-right">
      <FormControlLabel>备注:</FormControlLabel>
    </Col>
    <Col col="10">
      <Input type="textarea" style={{ height: '90px' }} />
    </Col>
  </FormGroup>
  <FormGroup className="offset-b">
    <Col col="2" className="text-right">
      <FormControlLabel>区域:</FormControlLabel>
    </Col>
    <Col col="10">
      <RadioGroup defaultValue={'北京'} style={{ lineHeight: '33px' }}>
        <Radio value="北京">北京</Radio>
        <Radio value="上海">上海</Radio>
        <Radio value="天津">天津</Radio>
        <Radio value="河北">河北</Radio>
      </RadioGroup>
    </Col>
  </FormGroup>
  <FormGroup style={{ justifyContent: 'center' }}>
    <Button theme="secondary" style={{ marginRight: 20 }}>
      关闭
    </Button>
    <Button theme="primary">保存</Button>
  </FormGroup>
</Form>
```

### 变更记录
