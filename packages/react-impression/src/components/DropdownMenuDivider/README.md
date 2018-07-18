### Examples

**basic**

```js
class ModalExample extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.menuClickHandle = this.menuClickHandle.bind(this);
  }
  menuClickHandle(message) {
    Notification.info({
      closeable: false,
      title: '菜单点击',
      message: `${message}被点击了！！！`
    });
  }
  render() {
    return (
      <Row>
        <Col>
          <Dropdown>
            <Dropdown.Trigger>
              <Button theme="primary">Dropdown</Button>
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单一')}>
                菜单一
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单二')}>
                菜单二
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单三')}>
                菜单三
              </Dropdown.MenuItem>
              <Dropdown.MenuDivider />
              <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单四')}>
                菜单四
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单五')}>
                菜单五
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单六')}>
                菜单六
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Trigger>
              <a href="javascript:void(0);">下拉菜单</a>
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单一')}>
                菜单一
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单二')}>
                菜单二
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单三')}>
                菜单三
              </Dropdown.MenuItem>
              <Dropdown.MenuDivider />
              <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单四')}>
                菜单四
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单五')}>
                菜单五
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => this.menuClickHandle('菜单六')}>
                菜单六
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
          <Notification />
        </Col>
      </Row>
    );
  }
}
<ModalExample />;
```
