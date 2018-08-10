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
              <Input type="text" />
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <Form>
            <FormGroup>
              <label>可清除:</label>
              <Input type="text" ref="clearInput" defaultValue="内容">
                <Icon type="times" onClick={this.clearInputHandle} />
              </Input>
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <Form>
            <FormGroup>
              <label>圆角形状:</label>
              <Input type="text" defaultValue="请输入内容" pill>
                <Icon type="search" />
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
        <Input type="date" />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>默认值:</label>
        <Input type="date" defaultValue="2016-05-29" />
      </FormGroup>
    </Form>
  </Col>
  <Col>
    <Form>
      <FormGroup>
        <label>禁用状态:</label>
        <Input type="date" defaultValue="2016-05-29" disabled />
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
    this.toggleModalHandle = this.toggleModalHandle.bind(this)
    this.selectCityHandle = this.selectCityHandle.bind(this)
  }
  toggleModalHandle() {
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
                  onClick={this.toggleModalHandle}
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
                  onClick={this.toggleModalHandle}
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
          <Modal size={this.state.size}>
            <ModalHeader>
              <Button close onClick={this.toggleModalHandle}>
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
              <Button theme="default" onClick={this.toggleModalHandle}>
                搜索
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
    <Input type="file" />
  </Col>
  <Col>
    <Input type="file" placeholder="请选择要上传的证书图片" />
  </Col>
  <Col>
    <Input type="file" btnStyle="primary" />
  </Col>
</Row>
```
