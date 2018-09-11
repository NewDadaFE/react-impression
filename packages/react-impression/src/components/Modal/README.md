### 示例

**默认样式**

```js
const handleToggleClick = () => {
  setState({
    isOpen: !state.isOpen,
  })
}
initialState = {
  isOpen: false,
}
;<div>
  <Button theme="primary" onClick={handleToggleClick}>
    显示默认弹窗
  </Button>
  <Modal isOpen={state.isOpen} onClose={handleToggleClick}>
    <ModalHeader>
      <Button close onClick={handleToggleClick}>
        &times;
      </Button>
      弹窗标题
    </ModalHeader>
    <ModalBody>
      <p>内容&hellip;</p>
    </ModalBody>
    <ModalFooter>
      <Button theme="default" onClick={handleToggleClick}>
        关闭
      </Button>
      <Button theme="primary">保存</Button>
    </ModalFooter>
  </Modal>
</div>
```

**支持键盘 esc 键位和点击背景阴影区域关闭**

```js
const handleToggleClick = () => {
  setState({
    isOpen: !state.isOpen,
  })
}
initialState = {
  isOpen: false,
}
;<div>
  <Button theme="primary" onClick={handleToggleClick}>
    打开Modal按下esc关闭
  </Button>
  <Modal
    isOpen={state.isOpen}
    onClose={handleToggleClick}
    closeOnEsc
    closeOnOutsideClick
  >
    <ModalHeader>
      <Button close onClick={handleToggleClick}>
        &times;
      </Button>
      弹窗标题
    </ModalHeader>
    <ModalBody>
      <p>内容&hellip;</p>
    </ModalBody>
    <ModalFooter>
      <Button theme="default" onClick={handleToggleClick}>
        关闭
      </Button>
      <Button theme="primary">保存</Button>
    </ModalFooter>
  </Modal>
</div>
```

**小尺寸弹窗**

```js
const handleToggleClick = () => {
  setState({
    isOpen: !state.isOpen,
  })
}
initialState = {
  isOpen: false,
}
;<div>
  <Button theme="primary" onClick={handleToggleClick}>
    显示小尺寸弹窗
  </Button>
  <Modal size="sm" onClose={handleToggleClick} isOpen={state.isOpen}>
    <ModalHeader>
      <Button close onClick={handleToggleClick}>
        &times;
      </Button>
      弹窗标题
    </ModalHeader>
    <ModalBody>
      <p>内容&hellip;</p>
    </ModalBody>
    <ModalFooter>
      <Button theme="default" onClick={handleToggleClick}>
        关闭
      </Button>
      <Button theme="primary">保存</Button>
    </ModalFooter>
  </Modal>
</div>
```

**大尺寸弹窗**

```js
const handleToggleClick = () => {
  setState({
    isOpen: !state.isOpen,
  })
}
initialState = {
  isOpen: false,
}
;<div>
  <Button theme="primary" onClick={handleToggleClick}>
    显示大尺寸弹窗
  </Button>
  <Modal size="lg" onClose={handleToggleClick} isOpen={state.isOpen}>
    <ModalHeader>
      <Button close onClick={handleToggleClick}>
        &times;
      </Button>
      弹窗标题
    </ModalHeader>
    <ModalBody>
      <p>内容&hellip;</p>
    </ModalBody>
    <ModalFooter>
      <Button theme="default" onClick={handleToggleClick}>
        关闭
      </Button>
      <Button theme="primary">保存</Button>
    </ModalFooter>
  </Modal>
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

    this.handleToggleClick = this.handleToggleClick.bind(this)
    this.toggleModalLimitHeight = this.toggleModalLimitHeight.bind(this)
  }

  handleToggleClick() {
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
            <Button theme="primary" onClick={() => this.handleToggleClick()}>
              显示弹窗
            </Button>
          </Col>
        </Row>
        <Modal
          scrollInside={this.state.scrollInside}
          onClose={() => this.handleToggleClick()}
          isOpen={this.state.show}
        >
          <ModalHeader>
            <Button close onClick={() => this.handleToggleClick()}>
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
            <Button theme="default" onClick={() => this.handleToggleClick()}>
              关闭
            </Button>
            <Button theme="primary">保存</Button>
          </ModalFooter>
        </Modal>
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
