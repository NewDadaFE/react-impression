### 示例

**默认样式**

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
    显示默认弹窗
  </Button>
  {state.isShow && (
    <Modal onClose={toggleModalHandle}>
      <ModalHeader>
        <Button close onClick={toggleModalHandle}>
          &times;
        </Button>
        弹窗标题
      </ModalHeader>
      <ModalBody>
        <p>内容&hellip;</p>
      </ModalBody>
      <ModalFooter>
        <Button theme="default" onClick={toggleModalHandle}>
          关闭
        </Button>
        <Button theme="primary">保存</Button>
      </ModalFooter>
    </Modal>
  )}
</div>
```

**支持键盘 esc 键位关闭**

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
    打开Modal按下esc关闭
  </Button>
  {state.isShow && (
    <Modal onClose={toggleModalHandle} closeOnEsc>
      <ModalHeader>
        <Button close onClick={toggleModalHandle}>
          &times;
        </Button>
        弹窗标题
      </ModalHeader>
      <ModalBody>
        <p>内容&hellip;</p>
      </ModalBody>
      <ModalFooter>
        <Button theme="default" onClick={toggleModalHandle}>
          关闭
        </Button>
        <Button theme="primary">保存</Button>
      </ModalFooter>
    </Modal>
  )}
</div>
```

**小尺寸弹窗**

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
    显示小尺寸弹窗
  </Button>
  {state.isShow && (
    <Modal size="sm" onClose={toggleModalHandle}>
      <ModalHeader>
        <Button close onClick={toggleModalHandle}>
          &times;
        </Button>
        弹窗标题
      </ModalHeader>
      <ModalBody>
        <p>内容&hellip;</p>
      </ModalBody>
      <ModalFooter>
        <Button theme="default" onClick={toggleModalHandle}>
          关闭
        </Button>
        <Button theme="primary">保存</Button>
      </ModalFooter>
    </Modal>
  )}
</div>
```

**大尺寸弹窗**

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
    显示大尺寸弹窗
  </Button>
  {state.isShow && (
    <Modal size="lg" onClose={toggleModalHandle}>
      <ModalHeader>
        <Button close onClick={toggleModalHandle}>
          &times;
        </Button>
        弹窗标题
      </ModalHeader>
      <ModalBody>
        <p>内容&hellip;</p>
      </ModalBody>
      <ModalFooter>
        <Button theme="default" onClick={toggleModalHandle}>
          关闭
        </Button>
        <Button theme="primary">保存</Button>
      </ModalFooter>
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
              显示弹窗
            </Button>
          </Col>
        </Row>
        {this.state.show && (
          <Modal
            scrollInside={this.state.scrollInside}
            onClose={() => this.toggleModalHandle()}
          >
            <ModalHeader>
              <Button close onClick={() => this.toggleModalHandle()}>
                &times;
              </Button>
              弹窗标题
            </ModalHeader>
            <ModalBody>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
              <p>显示内容&hellip;</p>
            </ModalBody>
            <ModalFooter>
              <Button theme="default" onClick={() => this.toggleModalHandle()}>
                关闭
              </Button>
              <Button theme="primary">保存</Button>
            </ModalFooter>
          </Modal>
        )}
      </div>
    )
  }
}
;<Overflow />
```

### 变更记录

v2.0.0

* 废弃 modal-dialog-sm-up-margin-y 这个 sass 变量
* 废弃 modal-footer-border-color 这个 sass 变量
* 废弃 modal-footer-border-width 这个 sass 变量
* 废弃 modal-inner-padding-sm 这个 sass 变量
