### 示例

Input 组件支持类型的详细内容请参照 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)

**尺寸**

```js
<Row>
  <Col>
    <Input size="xs" placeholder="最小尺寸" />
  </Col>
</Row>
<Row>
  <Col>
    <Input size="sm" placeholder="小尺寸" />
  </Col>
</Row>
<Row>
  <Col>
    <Input placeholder="默认尺寸" />
  </Col>
</Row>
<Row>
  <Col>
    <Input size="lg" placeholder="大尺寸" />
  </Col>
</Row>
```

**文字类型**

**clearable 属性**对文字类型输入框无效，可清除功能借助 **afterAddon 属性**可自行实现。

```js
class InputExample extends React.Component {
  constructor() {
    super()
    this.state = { basicValue: '' }
    this.clearInputHandle = this.clearInputHandle.bind(this)
  }
  clearInputHandle() {
    this.refs.clearInput.setValue('')
    this.refs.clearInput.focus()
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <label>普通：</label>
          <Input
            type="text"
            placeholder="状态受控输入框"
            value={this.state.basicValue}
            onChange={value => this.setState({ basicValue: value })}
          />
        </FormGroup>
        <FormGroup>
          <label>附加图标：</label>
          <Input
            type="text"
            placeholder="请输入"
            addonBefore={<Ico type="smile-o" />}
          />
        </FormGroup>
        <FormGroup>
          <label>可清除：</label>
          <Input
            type="text"
            ref="clearInput"
            addonAfter={
              <Ico type="times-circle" onClick={this.clearInputHandle} />
            }
          />
        </FormGroup>
      </Form>
    )
  }
}
;<InputExample />
```

**长文本类型**

默认可以在垂直方向进行拖拽拉伸，若想关闭拖拽效果需要自定义 style 样式，设置 **resize: none**。

```javascript
<Form>
  <FormGroup>
    <label>普通：</label>
    <Input type="textarea" placeholder="占位提示文案" />
  </FormGroup>
  <FormGroup>
    <label>禁用：</label>
    <Input type="textarea" placeholder="占位提示文案" disabled />
  </FormGroup>
  <FormGroup>
    <label>自定义样式：</label>
    <Input
      type="textarea"
      placeholder="占位提示文案"
      style={{ width: '300px', resize: 'none' }}
    />
  </FormGroup>
</Form>
```

**日期类型**

日期类型输入框有 5 种：年份、月份、日期、时间、秒。<br/>
**clearable 属性**仅对日期类型输入框生效，clearable 为 true 时，鼠标悬停到输入框会出现清除图标，点击触发 onChange 事件，回传空字符串。<br/>
更多用法请移步 [DatePicker 日期选择](#datepicker)。

```js
<Form>
  <FormGroup>
    <label>年份：</label>
    <Input type="year" />
  </FormGroup>
  <FormGroup>
    <label>月份：</label>
    <Input type="month" />
  </FormGroup>
  <FormGroup>
    <label>日期：</label>
    <Input type="date" />
  </FormGroup>
  <FormGroup>
    <label>时间：</label>
    <Input type="time" />
  </FormGroup>
  <FormGroup>
    <label>秒：</label>
    <Input type="second" />
  </FormGroup>
</Form>
```

**可搜索类型**

可搜索类型命名上由于历史原因不够准确，实际表现是输入框为只读状态，接受 onClick 回调。<br/>
带搜索功能的输入框请移步 [Search 搜索](#search)。

```js
class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
      city: {
        name: '上海',
        id: '1',
      },
    }
    this.handleToggleModal = this.handleToggleModal.bind(this)
    this.selectCityHandle = this.selectCityHandle.bind(this)
  }
  handleToggleModal() {
    let { show } = this.state

    this.setState({
      show: !show,
    })
  }
  selectCityHandle(id, name) {
    this.setState({
      show: false,
      city: {
        name,
        id,
      },
    })
  }
  render() {
    return (
      <div>
        <Input
          type="search"
          onClick={this.handleToggleModal}
          value={this.state.city.name}
        />
        {this.state.show && (
          <Modal
            size={this.state.size}
            isOpen={this.state.show}
            onClose={this.handleToggleModalhandleToggleModal}
          >
            <ModalHeader>
              <Button close onClick={this.handleToggleModal}>
                &times;
              </Button>
              <h5 className="no-margin">搜索</h5>
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col col="2" className="text-right">
                  <strong>华东：</strong>
                </Col>
                <Col col="10">
                  <InlineSelect
                    value={this.state.city.id}
                    onChange={this.selectCityHandle}
                  >
                    <InlineSelectOption value="1">上海</InlineSelectOption>
                    <InlineSelectOption value="2">苏州</InlineSelectOption>
                    <InlineSelectOption value="3">杭州</InlineSelectOption>
                    <InlineSelectOption value="4">嘉兴</InlineSelectOption>
                    <InlineSelectOption value="5">绍兴</InlineSelectOption>
                    <InlineSelectOption value="6">常州</InlineSelectOption>
                    <InlineSelectOption value="7">千岛湖</InlineSelectOption>
                    <InlineSelectOption value="8">昆山</InlineSelectOption>
                    <InlineSelectOption value="9">合肥</InlineSelectOption>
                  </InlineSelect>
                </Col>
              </Row>
              <Row>
                <Col col="2" className="text-right">
                  <strong>华南：</strong>
                </Col>
                <Col col="10">
                  <InlineSelect
                    value={this.state.city.id}
                    onChange={this.selectCityHandle}
                  >
                    <InlineSelectOption value="21">广州</InlineSelectOption>
                    <InlineSelectOption value="22">深圳</InlineSelectOption>
                    <InlineSelectOption value="23">东莞</InlineSelectOption>
                    <InlineSelectOption value="24">佛山</InlineSelectOption>
                    <InlineSelectOption value="25">厦门</InlineSelectOption>
                    <InlineSelectOption value="26">福州</InlineSelectOption>
                    <InlineSelectOption value="27">南昌</InlineSelectOption>
                    <InlineSelectOption value="28">泉州</InlineSelectOption>
                    <InlineSelectOption value="29">赣州</InlineSelectOption>
                  </InlineSelect>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button theme="secondary" onClick={this.handleToggleModal}>
                关闭
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </div>
    )
  }
}
;<Example />
```

**文件类型**

实际是 Upload 组件的二次封装，文件上传建议直接使用 [Upload 上传](#upload)。

```js
<Row>
  <Col>
    <Input type="file" />
  </Col>
</Row>
```

### 变更记录

v2.0.0

- 新增 input-box-shadow-focus sass 变量
- 新增 \$input-font-size-sm sass 变量
- 新增 \$input-font-size-lg sass 变量
- 修复 日期类型 Input 组件清除内容后，没有触发 onChange 事件的问题
