### 示例

**单个文件点击上传**

```js
<div>
  <Row>
    <Col col={7}>
      <Upload />
    </Col>
  </Row>
  <Row>
    <Col col={7}>
      <Upload placeholder="请上传资质证明" />
    </Col>
  </Row>
  <Row>
    <Col col={7}>
      <Upload btnText="附件" btnStyle="primary" />
    </Col>
  </Row>
</div>
```

**图片上传**

```js
let upload
;<Row>
  <Col>
    <Upload ref={ref => (upload = ref)} preview />
  </Col>
  <Col>
    <Upload preview message="上传图片">
      <Icon type="plus" />
    </Upload>
  </Col>
  <Col>
    <Upload
      src="https://nzfq0mp27.qnssl.com/0.1.18/homeV3/images/enjoy.jpg"
      preview
    />
  </Col>
</Row>
```

### 变更记录

v2.0.0

* 修改 选择文件后显示`文件路径`，改为显示`文件名称`
