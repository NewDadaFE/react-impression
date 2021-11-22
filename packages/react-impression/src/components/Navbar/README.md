### 使用场景

为网站提供全局导航菜单。

### 通用规则

- 位置固定于页面顶部，不跟随页面滑动而滚动
- 根据不同布局形式选用不同样式
- 适配屏幕拉伸形式

### 示例

#### 基本使用

- 当有 `children` 属性时，实现自定义导航栏；当没有 `children` 属性时，通过组件其他属性配置导航栏；
  **`children` 属性的优先级最高**
- 小工具图标可以通过 `type` 和 `iconUrl` 定义，**`type` 优先级高于`iconUrl`**
- 添加 `logo` 属性，导航栏为上下布局类结构；去掉 `logo` 属性，导航栏为左右布局类结构；当为左右布局类结构时，需要通过 `style` 属性设置 css 的 left 值， 默认导航栏 left 是 0。

```js
initialState = {
  roleId: 1,
  menuValue: 21,
  topVisible: false,
  leftVisible: false,
}
const navbarProps = {
  menuValue: state.menuValue,
  onMenuChange: (value, data, paths) => {
    setState({ menuValue: value })
    console.log('onMenuChange', value, data, paths)
  },
  menuDataSource: [
    {
      label: '名字很长很长的标题',
      value: 1,
    },
    {
      label: '商品分类',
      value: 2,
      child: [
        {
          label: '服饰',
          value: 21,
        },
        {
          label: '地方特产',
          value: 22,
        },
        {
          label: '美妆好物',
          value: 23,
        },
        {
          label: '名字很长的商品',
          value: 24,
        },
      ],
    },
    {
      label: '我的',
      value: 3,
      child: [
        {
          label: '基本信息',
          value: 31,
        },
        {
          label: '收货地址',
          value: 32,
        },
        {
          label: '我的订单',
          value: 33,
        },
      ],
    },
    {
      label: '名字很长的标题',
      value: 4,
    },
    {
      label: '名字很长的标题',
      value: 5,
    },
    {
      label: '名字很长的标题',
      value: 6,
    },
  ],
  iconDataSource: [
    {
      type: 'comment-o',
      children: '',
    },
    {
      type: 'floppy',
      children: (
        <img src="https://newdadafe.github.io/react-impression/logo.png" />
      ),
    },
    {
      iconUrl: 'https://newdadafe.github.io/react-impression/logo.png',
      children: <div>可以自定义内容哦</div>,
    },
  ],
  roleDataSource: [
    {
      roleName: '超级管理员',
      roleId: 1,
    },
    {
      roleName: '拣货总部运营',
      roleId: 2,
    },
    {
      roleName: '退出登陆',
      roleId: 3,
    },
  ],
  roleId: state.roleId,
  onRoleChange: (value, data) => {
    setState({ roleId: value })
    console.log('onRoleChange', value, data)
  },
}
;<div>
  {state.topVisible && (
    <Navbar
      {...navbarProps}
      logo="https://newdadafe.github.io/react-impression/logo.png"
    />
  )}
  {state.leftVisible && <Navbar {...navbarProps} style={{ left: '229px' }} />}
  <Button
    onClick={() =>
      setState({ topVisible: !state.topVisible, leftVisible: false })
    }
  >
    {state.topVisible ? '关闭' : '打开'}上下布局类导航栏
  </Button>
  <Button
    onClick={() =>
      setState({ leftVisible: !state.leftVisible, topVisible: false })
    }
    style={{ marginLeft: '20px' }}
  >
    {state.leftVisible ? '关闭' : '打开'}左右布局类导航栏
  </Button>
</div>
```

#### 自定义导航栏 - 无按钮有导航

```js
<Navbar>
  <Flex>
    <FlexItem>
      <NavbarLink href="#navbar" active>
        绩效
      </NavbarLink>
      <NavbarLink href="#navbar">考勤</NavbarLink>
      <NavbarLink href="#navbar">审批</NavbarLink>
      <NavbarLink href="#navbar">系统</NavbarLink>
    </FlexItem>
    <NavbarButton>
      <i className="dada-ico dada-ico-search" />
    </NavbarButton>
  </Flex>
</Navbar>
```

#### 自定义导航栏 - 有按钮无导航

```js
<Navbar>
  <Flex>
    <NavbarButton>
      <i className="dada-ico dada-ico-bars" />
    </NavbarButton>
    <FlexItem />
    <NavbarButton>
      <i className="dada-ico dada-ico-search" />
    </NavbarButton>
  </Flex>
</Navbar>
```

#### 自定义导航栏 - 有按钮有导航

```js
<Navbar>
  <Flex>
    <NavbarButton>
      <i className="dada-ico dada-ico-bars" />
    </NavbarButton>
    <FlexItem>
      <NavbarLink href="#navbar" active>
        绩效
      </NavbarLink>
      <NavbarLink href="#navbar">考勤</NavbarLink>
      <NavbarLink href="#navbar">审批</NavbarLink>
      <NavbarLink href="#navbar">系统</NavbarLink>
    </FlexItem>
    <NavbarButton>
      <i className="dada-ico dada-ico-search" />
    </NavbarButton>
  </Flex>
</Navbar>
```

**变更记录**

v2.0.0

- 废弃原有组件，根据 UI 规范重新实现，不兼容 1.x 版本

v3.0.0

- 根据 UI 规范重新实现，兼容 2.x 版本
- 新增系统 logo, 菜单，小工具，切换角色功能
- 导航栏位置固定在顶部
