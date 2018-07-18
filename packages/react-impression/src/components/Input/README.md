### Examples

**text**

```js
class ModalExample extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.clearInputHandle = this.clearInputHandle.bind(this);
  }
  clearInputHandle() {
    this.refs.clearInput.setValue('');
    this.refs.clearInput.focus();
  }
  render() {
    return (
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <label>basic:</label>
              <Input type="text" />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group>
              <label>addon:</label>
              <Input type="text" ref="clearInput" defaultValue="text">
                <Icon type="times" onClick={this.clearInputHandle} />
              </Input>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group>
              <label>pill shape:</label>
              <Input type="text" defaultValue="something" pill>
                <Icon type="search" />
              </Input>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    );
  }
}
<ModalExample />;
```

**date**

```js
<Row>
  <Col>
    <Form>
      <Form.Group>
        <label>basic:</label>
        <Input type="date" />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>defaultVal:</label>
        <Input type="date" defaultValue="2016-05-29" />
      </Form.Group>
    </Form>
  </Col>
  <Col>
    <Form>
      <Form.Group>
        <label>disabled:</label>
        <Input type="date" defaultValue="2016-05-29" disabled />
      </Form.Group>
    </Form>
  </Col>
</Row>
```

**search**

```js
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      city: {
        name: '上海',
        id: '1'
      }
    };
    this.toggleModalHandle = this.toggleModalHandle.bind(this);
    this.selectCityHandle = this.selectCityHandle.bind(this);
  }
  toggleModalHandle() {
    let { show } = this.state;

    this.setState({
      show: !show
    });
  }
  selectCityHandle(id, name) {
    this.setState({
      show: false,
      city: {
        name,
        id
      }
    });
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <label>basic:</label>
                <Input
                  type="search"
                  onClick={this.toggleModalHandle}
                  value={this.state.city.name}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <label>addon:</label>
                <Input
                  type="search"
                  onClick={this.toggleModalHandle}
                  value={this.state.city.name}
                >
                  <Icon type="map-marker" />
                </Input>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <label>disabled:</label>
                <Input type="search" value="上海" disabled />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        {this.state.show && (
          <Modal size={this.state.size}>
            <Modal.Header>
              <Button close onClick={this.toggleModalHandle}>
                &times;
              </Button>
              <h5 className="no-margin">Search</h5>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col col="2" className="text-right">
                  <strong>华东：</strong>
                </Col>
                <Col col="10">
                  <InlineSelect
                    value={this.state.city.id}
                    onChange={this.selectCityHandle}
                  >
                    <InlineSelect.Option value="1">上海</InlineSelect.Option>
                    <InlineSelect.Option value="2">苏州</InlineSelect.Option>
                    <InlineSelect.Option value="3">杭州</InlineSelect.Option>
                    <InlineSelect.Option value="4">嘉兴</InlineSelect.Option>
                    <InlineSelect.Option value="5">绍兴</InlineSelect.Option>
                    <InlineSelect.Option value="6">常州</InlineSelect.Option>
                    <InlineSelect.Option value="7">千岛湖</InlineSelect.Option>
                    <InlineSelect.Option value="8">昆山</InlineSelect.Option>
                    <InlineSelect.Option value="9">合肥</InlineSelect.Option>
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
                    <InlineSelect.Option value="21">广州</InlineSelect.Option>
                    <InlineSelect.Option value="22">深圳</InlineSelect.Option>
                    <InlineSelect.Option value="23">东莞</InlineSelect.Option>
                    <InlineSelect.Option value="24">佛山</InlineSelect.Option>
                    <InlineSelect.Option value="25">厦门</InlineSelect.Option>
                    <InlineSelect.Option value="26">福州</InlineSelect.Option>
                    <InlineSelect.Option value="27">南昌</InlineSelect.Option>
                    <InlineSelect.Option value="28">泉州</InlineSelect.Option>
                    <InlineSelect.Option value="29">赣州</InlineSelect.Option>
                  </InlineSelect>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button theme="default" onClick={this.toggleModalHandle}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  }
}
<Example />;
```

**file**

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
