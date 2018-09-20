### 示例

**文字类型**

```js
class ModalExample extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.clearInputHandle = this.clearInputHandle.bind(this)
  }
  clearInputHandle() {
    this.refs.clearInput.setValue('')
    this.refs.clearInput.focus()
  }
  render() {
    return (
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <label>基础:</label>
              <Input type="text" style={{ width: 224 }} />
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <Form>
            <FormGroup>
              <label>可清除:</label>
              <Input
                type="text"
                ref="clearInput"
                defaultValue="内容"
                style={{ width: 224 }}
              >
                <Icon type="times" onClick={this.clearInputHandle} />
              </Input>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    )
  }
}
;<ModalExample />
```

**日期类型**

```js
<Row>
  <Col>
    <Form>
      <FormGroup>
        <label>基础:</label>
        <Input type="date" style={{ width: 224 }} />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>默认值:</label>
        <Input type="date" defaultValue="2016-05-29" style={{ width: 224 }} />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>禁用状态:</label>
        <Input
          type="date"
          defaultValue="2016-05-29"
          disabled
          style={{ width: 224 }}
        />
      </FormGroup>
    </Form>
  </Col>
</Row>
```

**可搜索类型**

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
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <label>基础:</label>
                <Input
                  type="search"
                  onClick={this.handleToggleModal}
                  value={this.state.city.name}
                />
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <Form>
              <FormGroup>
                <label>可清除:</label>
                <Input
                  type="search"
                  onClick={this.handleToggleModal}
                  value={this.state.city.name}
                >
                  <Icon type="map-marker" />
                </Input>
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <Form>
              <FormGroup>
                <label>禁用状态:</label>
                <Input type="search" value="上海" disabled />
              </FormGroup>
            </Form>
          </Col>
        </Row>
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
              <Button theme="default" onClick={this.handleToggleModal}>
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

```js
<Row>
  <Col>
    <Input type="file" style={{width: '464px'}} />
  </Col>
</Row>
<Row>
  <Col>
    <Input
      type="file"
      placeholder="请选择要上传的证书图片"
      style={{width: '464px'}}
     />
  </Col>
</Row>
<Row>
  <Col>
    <Input type="file" btnStyle="primary" style={{width: '464px'}} />
  </Col>
</Row>
```

**三种大小**

```js
<Row>
  <Col>
    <Input size="sm" placeholder="小尺寸" style={{ width: 224 }} />
  </Col>
  <Col>
    <Input placeholder="默认尺寸" style={{ width: 224 }} />
  </Col>
  <Col>
    <Input size="lg" placeholder="大尺寸" style={{ width: 224 }} />
  </Col>
</Row>
```

**自适应尺寸**

```js
<Input placeholder="自适应尺寸" className="d-block" />
```

### 变更记录

v2.0.0

* 新增 input-box-shadow-focus sass 变量
* 新增 $input-font-size-sm sass 变量
* 新增 $input-font-size-lg sass 变量
* 修复 日期类型 Input 组件清除内容后，没有触发 onChange 事件的问题
