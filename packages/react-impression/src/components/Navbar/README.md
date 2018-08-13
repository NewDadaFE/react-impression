### Example

**默认主题**

```js
<Navbar>
  <Flex>
    <NavbarBrand>导航条</NavbarBrand>
    <FlexItem>
      <Nav type="inline">
        <NavLink>
          <a href="javascript:void(0);">主页</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">特点</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">价格</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">关于</a>
        </NavLink>
      </Nav>
    </FlexItem>
    <Form type="inline">
      <FormGroup>
        <input
          className="form-control"
          type="text"
          placeholder="输入搜索内容"
        />
      </FormGroup>
      <Button theme="primary">搜索</Button>
    </Form>
  </Flex>
</Navbar>
```

**原色主题**

```js
<Navbar theme="primary">
  <Flex align="middle">
    <NavbarBrand>导航条</NavbarBrand>
    <FlexItem>
      <Nav type="inline">
        <NavLink>
          <a href="javascript:void(0);">主页</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">特点</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">价格</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">关于</a>
        </NavLink>
      </Nav>
    </FlexItem>
    <Form type="inline">
      <FormGroup>
        <input
          className="form-control no-border"
          type="text"
          placeholder="输入搜索内容"
        />
      </FormGroup>
      <Button theme="secondary">搜索</Button>
    </Form>
  </Flex>
</Navbar>
```

**反色主题**

```js
<Navbar theme="inverse">
  <Flex align="middle">
    <NavbarBrand>导航条</NavbarBrand>
    <FlexItem>
      <Nav type="inline">
        <NavLink>
          <a href="javascript:void(0);">主页</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">特点</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">价格</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">关于</a>
        </NavLink>
      </Nav>
    </FlexItem>
    <Form type="inline">
      <FormGroup>
        <input
          className="form-control no-border"
          type="text"
          placeholder="输入搜索内容"
        />
      </FormGroup>
      <Button theme="primary">搜索</Button>
    </Form>
  </Flex>
</Navbar>
```

**素色主题**

```js
<Navbar theme="pure">
  <Flex align="middle">
    <NavbarBrand>导航条</NavbarBrand>
    <FlexItem>
      <Nav type="inline">
        <NavLink>
          <a href="javascript:void(0);">主页</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">特点</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">价格</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">关于</a>
        </NavLink>
      </Nav>
    </FlexItem>
    <Form type="inline">
      <FormGroup>
        <input
          className="form-control"
          type="text"
          placeholder="输入搜索内容"
        />
      </FormGroup>
      <Button theme="primary">搜索</Button>
    </Form>
  </Flex>
</Navbar>
```
