**Modal 组件**配合 **ModalHeader 组件**、**ModalBody 组件**、**ModalFooter 组件**可以实现模态框。

### 示例

#### 1、基本用法

组件支持 5 种尺寸的弹窗。

```js
const handleToggleClick = size => {
  setState({
    size: typeof size === 'string' ? size : 'sm',
    isOpen: !state.isOpen,
  })
}
initialState = {
  size: 'sm',
  isOpen: false,
}
;<div>
  <Row>
    <Col>
      <Button theme="secondary" onClick={() => handleToggleClick('xs')}>
        超小尺寸
      </Button>
    </Col>
    <Col>
      <Button theme="secondary" onClick={() => handleToggleClick('sm')}>
        小尺寸
      </Button>
    </Col>
    <Col>
      <Button onClick={() => handleToggleClick('md')}>默认尺寸</Button>
    </Col>
    <Col>
      <Button theme="secondary" onClick={() => handleToggleClick('lg')}>
        大尺寸
      </Button>
    </Col>
    <Col>
      <Button theme="secondary" onClick={() => handleToggleClick('xl')}>
        超大尺寸
      </Button>
    </Col>
  </Row>

  <Modal size={state.size} onClose={handleToggleClick} isOpen={state.isOpen}>
    <ModalHeader>弹窗标题</ModalHeader>
    <ModalBody>内容&hellip;</ModalBody>
    <ModalFooter>
      <Button theme="secondary" onClick={handleToggleClick}>
        取消
      </Button>
      <Button>确定</Button>
    </ModalFooter>
  </Modal>
</div>
```

#### 2、关闭弹窗的方式

- **closeOnEsc 属性：** 按下键盘 esc 键位（默认开启）
- **closeOnOutsideClick 属性：** 点击背景阴影区域（默认开启）
- **showClose 属性：** 点击右上角关闭图标（默认关闭），开启 showClose 时，onClose 回调必传！

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
  <p>取消默认的 3 种️关闭方式：</p>
  <Button onClick={handleToggleClick}>打开弹窗</Button>
  <Modal
    isOpen={state.isOpen}
    onClose={handleToggleClick}
    closeOnEsc={false}
    closeOnOutsideClick={false}
    showClose
  >
    <ModalHeader>弹窗标题</ModalHeader>
    <ModalBody>内容&hellip;</ModalBody>
  </Modal>
</div>
```

#### 3、弹窗头部附加内容

通过 **ModalHeader 组件** 的 **addonAfter 属性** 支持在弹窗头部右侧插入附加内容。

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
  <Button onClick={handleToggleClick}>头部附加内容</Button>
  <Modal isOpen={state.isOpen} onClose={handleToggleClick} showClose>
    <ModalHeader
      addonAfter={
        <TextLink>
          <Ico className="offset-r-xxs" type="download" />
          导出
        </TextLink>
      }
    >
      弹窗标题
    </ModalHeader>
    <ModalBody>内容&hellip;</ModalBody>
    <ModalFooter>
      <Button theme="secondary" onClick={handleToggleClick}>
        取消
      </Button>
      <Button>确定</Button>
    </ModalFooter>
  </Modal>
</div>
```

#### 4、内容滚动模式

- 弹窗高度被内容区域撑开，整个弹窗滚动（默认）
- 弹窗定高，内容区域滚动

```js
class Overflow extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      show: false,
      scrollInside: false,
    }

    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick(scrollInside) {
    this.setState({
      show: !this.state.show,
      scrollInside,
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col col={3}>
            <Button onClick={() => this.handleToggleClick(false)}>
              整个弹窗滚动
            </Button>
          </Col>
          <Col col={3}>
            <Button onClick={() => this.handleToggleClick(true)}>
              内部滚动
            </Button>
          </Col>
        </Row>
        <Modal
          scrollInside={this.state.scrollInside}
          onClose={() => this.handleToggleClick()}
          isOpen={this.state.show}
        >
          <ModalHeader>弹窗标题</ModalHeader>
          <ModalBody>
            <div>
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
              <div>显示内容&hellip;</div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button theme="secondary" onClick={() => this.handleToggleClick()}>
              取消
            </Button>
            <Button>确定</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
;<Overflow />
```

#### 用作提示的弹窗

```javascript
const handleToggleClick = () => {
  setState({
    isOpen: !state.isOpen,
  })
}
initialState = {
  isOpen: false,
}
;<div>
  <Button onClick={handleToggleClick}>点击提示</Button>
  <Modal size="xs" isOpen={state.isOpen}>
    <ModalBody>
      <h6>提示</h6>
      内容&hellip;
    </ModalBody>
    <ModalFooter>
      <Button theme="secondary" onClick={handleToggleClick}>
        取消
      </Button>
      <Button>确定</Button>
    </ModalFooter>
  </Modal>
</div>
```

### 变更记录

v3.0.0

- 新增 size 属性有效值：xs、md、xl
- 新增 showClose 属性，支持关闭图标
- 新增 ModalHeader 组件的 addonAfter 属性，支持头部添加附加元件
