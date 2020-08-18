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

**多个文件点击上传**

```js
class UploadExample extends React.Component {
  constructor() {
    super()
    this.state = {
      files: [{ name: 'xxx.png', url: 'www.baidu.com' }],
    }
    this.handleChange = this.handleChange.bind(this)
    this.deleteFile = this.deleteFile.bind(this)
  }
  handleChange(event) {
    console.log('选择了文件:', event.target.files[0])
    const file = event.target.files[0]
    this.setState({
      files: [
        ...this.state.files,
        {
          name: file.name,
          url: 'www.google.com', //实际url为后台返回的url
        },
      ],
    })
  }
  deleteFile(file, index) {
    console.log('需要删除的文件是:', file)
    console.log('需要删除的文件的索引是:', index)
    var fileList = this.state.files
    fileList.splice(index, 1)
    this.setState({
      files: fileList,
    })
  }
  render() {
    const { files } = this.state
    return (
      <div>
        <Row>
          <Col>
            <Upload
              style={{ width: 464 }}
              onChange={this.handleChange}
              multiple={true}
              onDeleteFile={this.deleteFile}
              files={files}
            />
          </Col>
        </Row>
      </div>
    )
  }
}
;<UploadExample />
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
            <Ico type="plus" />
          </Upload>
        </Col>
      </Row>
    )
  }
}
;<UploadExample />
```

**上传多张图片**

```js
class UploadExample extends React.Component {
  constructor() {
    super()
    this.state = {
      files: [
        {
          name: 'xxx.png',
          url:
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2070940192,1982182585&fm=26&gp=0.jpg',
        },
      ],
    }
    this.handleChange = this.handleChange.bind(this)
    this.deleteFile = this.deleteFile.bind(this)
  }

  handleChange(event) {
    console.log('选择了文件：', event.target.files[0])
    const file = event.target.files[0]
    this.setState({
      files: [
        ...this.state.files,
        {
          name: file.name,
          url:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2684769705,335692720&fm=26&gp=0.jpg', //url为实际后台返回的地址
        },
      ],
    })
  }

  deleteFile(item, index) {
    console.log('需要删除的文件是', item)
    console.log('需要删除的文件的索引是', index)
    let fileList = this.state.files
    fileList.splice(index, 1)
    this.setState({
      files: fileList,
    })
  }

  render() {
    const { files } = this.state
    return (
      <Row>
        <Col>
          <h5>选择图片后预览：</h5>
          <Upload
            preview
            multiple
            message="上传图片"
            onChange={this.handleChange}
            files={files}
            onDeleteFile={this.deleteFile}
          >
            <Ico type="plus" />
          </Upload>
        </Col>
      </Row>
    )
  }
}
;<UploadExample />
```

**指定上传的文件类型**

通过 accept 参数，传入匹配文件类型的字符串。

```js
const handleChange = e => {
  console.log('选择了文件：', e.currentTarget.value)
}
;<div>
  <Row>
    <Col>
      <h5>选择图片：</h5>
      <Upload
        placeholder="请选择图片"
        accept="image/*"
        onChange={handleChange}
      />
    </Col>
    <Col>
      <h5>选择Excel：</h5>
      <Upload
        placeholder="请选择Excel"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={handleChange}
      />
    </Col>
  </Row>
</div>
```

### 变更记录

v2.0.0

- 修改 选择文件后显示`文件路径`，改为显示`文件名称`
- 新增 `accept` 指定选择的文件类型
