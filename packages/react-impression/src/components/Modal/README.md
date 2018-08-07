### Example

**Default**

```js
const toggleModalHandle = () => {
  setState({
    isShow: !state.isShow,
  })
}
initialState = {
  isShow: false,
}
;<div>
  <Button theme="primary" onClick={toggleModalHandle}>
    Toggle Modal
  </Button>
  {state.isShow && (
    <Modal>
      <Modal.Header>
        <Button close onClick={toggleModalHandle}>
          &times;
        </Button>
        <h5 className="no-margin">Modal title</h5>
      </Modal.Header>
      <Modal.Body>
        <p>One fine body&hellip;</p>
      </Modal.Body>
      <Modal.Footer>
        <Button theme="default" onClick={toggleModalHandle}>
          Close
        </Button>
        <Button theme="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  )}
</div>
```

**Size: sm**

```js
const toggleModalHandle = () => {
  setState({
    isShow: !state.isShow,
  })
}
initialState = {
  isShow: false,
}
;<div>
  <Button theme="primary" onClick={toggleModalHandle}>
    Toggle Modal
  </Button>
  {state.isShow && (
    <Modal size="sm">
      <Modal.Header>
        <Button close onClick={toggleModalHandle}>
          &times;
        </Button>
        <h5 className="no-margin">Modal title</h5>
      </Modal.Header>
      <Modal.Body>
        <p>One fine body&hellip;</p>
      </Modal.Body>
      <Modal.Footer>
        <Button theme="default" onClick={toggleModalHandle}>
          Close
        </Button>
        <Button theme="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  )}
</div>
```

**Size: lg**

```js
const toggleModalHandle = () => {
  setState({
    isShow: !state.isShow,
  })
}
initialState = {
  isShow: false,
}
;<div>
  <Button theme="primary" onClick={toggleModalHandle}>
    Toggle Modal
  </Button>
  {state.isShow && (
    <Modal size="lg">
      <Modal.Header>
        <Button close onClick={toggleModalHandle}>
          &times;
        </Button>
        <h5 className="no-margin">Modal title</h5>
      </Modal.Header>
      <Modal.Body>
        <p>One fine body&hellip;</p>
      </Modal.Body>
      <Modal.Footer>
        <Button theme="default" onClick={toggleModalHandle}>
          Close
        </Button>
        <Button theme="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  )}
</div>
```

**多内容情况可以选择滚动模式**

```js
class Overflow extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      show: false,
      scrollInside: false,
    }

    this.toggleModalHandle = this.toggleModalHandle.bind(this)
    this.toggleModalLimitHeight = this.toggleModalLimitHeight.bind(this)
  }

  toggleModalHandle() {
    this.setState({
      show: !this.state.show,
    })
  }

  toggleModalLimitHeight(value) {
    this.setState({
      scrollInside: value,
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <label className="offset-r-lg">内部滚动模式</label>
            <Switch onChange={this.toggleModalLimitHeight} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button theme="primary" onClick={() => this.toggleModalHandle()}>
              Show Modal
            </Button>
          </Col>
        </Row>
        {this.state.show && (
          <Modal scrollInside={this.state.scrollInside}>
            <Modal.Header>
              <Button close onClick={() => this.toggleModalHandle()}>
                &times;
              </Button>
              <h5 className="no-margin">Modal title</h5>
            </Modal.Header>
            <Modal.Body>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
              <p>more contents&hellip;</p>
            </Modal.Body>
            <Modal.Footer>
              <Button theme="default" onClick={() => this.toggleModalHandle()}>
                Close
              </Button>
              <Button theme="primary">Save</Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    )
  }
}
;<Overflow />
```

### Changelog

v2.0.0

- 废弃 modal-dialog-sm-up-margin-y 这个 sass 变量
