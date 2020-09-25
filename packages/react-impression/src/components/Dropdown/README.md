### 示例

**基本用法**

```js
class ModalExample extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.menuClickHandle = this.menuClickHandle.bind(this)
  }
  menuClickHandle(message) {
    Notification.info({
      closeable: false,
      title: '菜单点击！',
      message: `${message}被点击了！！！`,
    })
  }
  render() {
    return (
      <Row>
        <Col>
          <Dropdown>
            <DropdownTrigger>
              <Button theme="primary">下拉菜单</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownMenuItem
                disabled
                onClick={() => this.menuClickHandle('菜单一')}
              >
                菜单一
              </DropdownMenuItem>
              <DropdownMenuDivider />
              <DropdownMenuItem onClick={() => this.menuClickHandle('菜单二')}>
                菜单二
              </DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown>
            <DropdownTrigger>
              <Button theme="secondary">下拉菜单</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownMenuItem
                disabled
                onClick={() => this.menuClickHandle('菜单一')}
              >
                菜单一
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => this.menuClickHandle('菜单二')}>
                菜单二
              </DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
          <Notification />
        </Col>
        <Col>
          <Dropdown>
            <DropdownTrigger>
              <Button theme="text">下拉菜单</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownMenuItem
                disabled
                onClick={() => this.menuClickHandle('菜单一')}
              >
                菜单一
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => this.menuClickHandle('菜单二')}>
                菜单二
              </DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
          <Notification />
        </Col>
      </Row>
    )
  }
}
;<ModalExample />
```

**禁用状态**

```js
class ModalExample extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.menuClickHandle = this.menuClickHandle.bind(this)
  }
  menuClickHandle(message) {
    Notification.info({
      closeable: false,
      title: '菜单点击',
      message: `${message}被点击了！！！`,
    })
  }
  render() {
    return (
      <Row>
        <Col>
          <Dropdown disabled={true}>
            <DropdownTrigger>
              <Button theme="primary">下拉菜单</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownMenuItem
                disabled
                onClick={() => this.menuClickHandle('菜单一')}
              >
                菜单一
              </DropdownMenuItem>
              <DropdownMenuDivider />
              <DropdownMenuItem onClick={() => this.menuClickHandle('菜单二')}>
                菜单二
              </DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown disabled={true}>
            <DropdownTrigger>
              <Button theme="secondary">下拉菜单</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownMenuItem
                disabled
                onClick={() => this.menuClickHandle('菜单一')}
              >
                菜单一
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => this.menuClickHandle('菜单二')}>
                菜单二
              </DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
          <Notification />
        </Col>
        <Col>
          <Dropdown disabled={true}>
            <DropdownTrigger>
              <Button theme="text">下拉菜单</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownMenuItem
                disabled
                onClick={() => this.menuClickHandle('菜单一')}
              >
                菜单一
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => this.menuClickHandle('菜单二')}>
                菜单二
              </DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
          <Notification />
        </Col>
      </Row>
    )
  }
}
;<ModalExample />
```
