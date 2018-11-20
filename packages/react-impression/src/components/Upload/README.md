### 示例

**特别提醒：**

通常同一个 Upload 组件，相同文件，只能选择并上传一次。<br />
若要实现相同文件多次上传的效果，可以在 onChange 回调函数中手动设置：**event.currentTarget.value = ''**

**单个文件点击上传**

```js
const handleChange = e => {
  console.log('选择了文件：', e.currentTarget.value)
}
;<div>
  <Row>
    <Col>
      <Upload style={{ width: 464 }} onChange={handleChange} />
    </Col>
  </Row>
  <Row>
    <Col>
      <Upload
        placeholder="请上传资质证明"
        style={{ width: 464 }}
        onChange={handleChange}
      />
    </Col>
  </Row>
  <Row>
    <Col>
      <Upload
        btnText="附件"
        btnStyle="primary"
        style={{ width: 464 }}
        onChange={handleChange}
      />
    </Col>
  </Row>
</div>
```

**图片上传**

```js
class UploadExample extends React.Component {
  constructor() {
    super()
    this.state = {
      previewUrl: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handlePreviewChange = this.handlePreviewChange.bind(this)
  }

  handleChange(event) {
    console.log('选择了文件：', event.currentTarget.value)
  }

  handlePreviewChange(event) {
    const file = event.target.files && event.target.files[0]

    if (file) {
      console.log('选择了文件：', event.currentTarget.value)
      const reader = new window.FileReader()
      reader.onload = e => {
        this.setState({
          previewUrl: e.currentTarget.result,
        })
      }
      reader.readAsDataURL(file)
    }
  }

  render() {
    return (
      <Row>
        <Col>
          <h5>无预览效果：</h5>
          <Upload preview onChange={this.handleChange} />
        </Col>
        <Col>
          <h5>选择图片后预览：</h5>
          <Upload
            src={this.state.previewUrl}
            preview
            message="上传图片"
            onChange={this.handlePreviewChange}
          >
            <Icon type="plus" />
          </Upload>
        </Col>
      </Row>
    )
  }
}
;<UploadExample />
```

### 变更记录

v2.0.0

* 修改 选择文件后显示`文件路径`，改为显示`文件名称`
