### Examples

**Basic**

```js
<Row>
  <Col>
    <Input ref="file" type="file" />
  </Col>
  <Col>
    <Input type="file" placeholder="请上传资质证明" onChange={() => {}} />
  </Col>
  <Col>
    <Upload btnText="附件" btnStyle="primary" />
  </Col>
</Row>
```

**Preview**

```js
<Row>
  <Col>
    <Upload ref="upload" preview />
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
