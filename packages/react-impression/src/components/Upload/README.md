### 示例

**单个文件点击上传**

```js
const handleChange = e => {
  console.log('选择了文件：', e.currentTarget.value)
}
;<div>
  <Row>
    <Col>
      <Upload style={{ width: '464px' }} onChange={handleChange} />
    </Col>
  </Row>
  <Row>
    <Col>
      <Upload
        placeholder="请上传资质证明"
        style={{ width: '464px' }}
        onChange={handleChange}
      />
    </Col>
  </Row>
  <Row>
    <Col>
      <Upload
        btnText="附件"
        btnStyle="primary"
        style={{ width: '464px' }}
        onChange={handleChange}
      />
    </Col>
  </Row>
</div>
```

**图片上传**

```js
const handleChange = e => {
  console.log('选择了文件：', e.currentTarget.value)
}
;<Row>
  <Col>
    <Upload preview onChange={handleChange} />
  </Col>
  <Col>
    <Upload preview message="上传图片" onChange={handleChange}>
      <Icon type="plus" />
    </Upload>
  </Col>
  <Col>
    <Upload
      src="https://nzfq0mp27.qnssl.com/0.1.18/homeV3/images/enjoy.jpg"
      onChange={handleChange}
      preview
    />
  </Col>
</Row>
```

### 变更记录

v2.0.0

* 修改 选择文件后显示`文件路径`，改为显示`文件名称`
