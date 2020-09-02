### 示例

#### 特别提醒

通常同一个 Upload 组件，相同文件，只能选择并上传一次。<br />
若要实现相同文件多次上传的效果，可以在 onChange 回调函数中手动设置：**event.currentTarget.value = ''**

#### 文件上传模式

**单个文件上传**

```js
const handleChange = e => {
  console.log('选择了文件：', e.currentTarget.value)
}
;<Form>
  <FormGroup>
    <label>普通：</label>
    <Upload onChange={handleChange} />
  </FormGroup>
  <FormGroup>
    <label>禁用：</label>
    <Upload onChange={handleChange} disabled />
  </FormGroup>
  <FormGroup>
    <label>自定义样式：</label>
    <Upload
      placeholder="请上传资质证明"
      btnText="附件"
      btnStyle="primary"
      onChange={handleChange}
      style={{ width: '300px' }}
    />
  </FormGroup>
</Form>
```

**多个文件上传**

```js
class UploadExample extends React.Component {
  constructor() {
    super()
    this.state = {
      files: [{ name: 'www.baidu.com', url: 'www.baidu.com' }],
    }
    this.handleChange = this.handleChange.bind(this)
    this.deleteFile = this.deleteFile.bind(this)
  }
  handleChange(event) {
    const files = event.target.files
    if (!files) return
    const filesLength = files.length
    const fileList = []
    for (let i = 0; i < filesLength; i++) {
      const file = files.item(i)
      fileList.push({ name: file.name, url: 'www.baidu.com' })
    }
    this.setState({
      files: [...this.state.files, ...fileList],
    })
  }
  deleteFile(file, index) {
    console.log('需要删除的文件是:', file)
    console.log('需要删除的文件的索引是:', index)
    var fileList = this.state.files
    fileList.splice(index, 1)
    this.setState({
      files: [...fileList],
    })
  }
  render() {
    const { files } = this.state
    return (
      <div>
        <Row>
          <Col>
            <Upload
              onChange={this.handleChange}
              onDeleteFile={this.deleteFile}
              files={files}
              multiple
            />
          </Col>
        </Row>
      </div>
    )
  }
}
;<UploadExample />
```

#### 图片上传模式

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
      <Form>
        <FormGroup>
          <label>无预览效果：</label>
          <Upload onChange={this.handleChange} preview />
        </FormGroup>
        <FormGroup>
          <label>选择图片后预览：</label>
          <Upload
            src={this.state.previewUrl}
            onChange={this.handlePreviewChange}
            preview
          />
        </FormGroup>
        <FormGroup>
          <label>自定义图标和文案：</label>
          <Upload message="上传图片" onChange={this.handleChange} preview>
            <Ico type="plus" />
          </Upload>
        </FormGroup>
        <FormGroup>
          <label>禁用：</label>
          <Upload
            message="上传图片"
            onChange={this.handleChange}
            style={{ marginRight: '16px' }}
            preview
            disabled
          >
            <Ico type="plus" />
          </Upload>
          <Upload
            src="https://placehold.it/240x400"
            onChange={this.handlePreviewChange}
            preview
            disabled
          />
        </FormGroup>
      </Form>
    )
  }
}
;<UploadExample />
```

**多张图片上传**

```js
class UploadExample extends React.Component {
  constructor() {
    super()
    this.state = {
      files: [
        {
          name: 'xxx.png',
          url: 'https://placehold.it/240x400',
        },
      ],
    }
    this.handleChange = this.handleChange.bind(this)
    this.deleteFile = this.deleteFile.bind(this)
  }

  handleChange(event) {
    const files = event.target.files
    if (!files) return
    const filesLength = files.length
    const fileList = []
    for (let i = 0; i < filesLength; i++) {
      const file = files.item(i)
      fileList.push({ name: file.name, url: 'https://placehold.it/400x240' })
    }
    this.setState({
      files: [...this.state.files, ...fileList],
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
      <Form type="horizontal">
        <FormGroup>
          <label>普通：</label>
          <Upload
            message="上传图片"
            onChange={this.handleChange}
            files={files}
            onDeleteFile={this.deleteFile}
            preview
            multiple
          >
            <Ico type="plus" />
          </Upload>
        </FormGroup>
        <FormGroup>
          <label>禁用：</label>
          <Upload
            message="上传图片"
            onChange={this.handleChange}
            files={files}
            onDeleteFile={this.deleteFile}
            preview
            multiple
            disabled
          >
            <Ico type="plus" />
          </Upload>
        </FormGroup>
      </Form>
    )
  }
}
;<UploadExample />
```

**指定文件类型**

通过 accept 参数，传入匹配文件类型的字符串。

```js
const handleChange = e => {
  console.log('选择了文件：', e.currentTarget.value)
}
;<Form>
  <FormGroup>
    <label>选择图片：</label>
    <Upload placeholder="请选择图片" accept="image/*" onChange={handleChange} />
  </FormGroup>
  <FormGroup>
    <label>选择Excel：</label>
    <Upload
      placeholder="请选择Excel"
      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      onChange={handleChange}
    />
  </FormGroup>
</Form>
```

### 变更记录

v2.0.0

- 修改 选择文件后显示`文件路径`，改为显示`文件名称`
- 新增 `accept` 指定选择的文件类型
