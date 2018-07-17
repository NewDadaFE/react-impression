### Example

**Default**

```js
<Navbar>
  <Flex>
    <NavbarBrand>Navbar</NavbarBrand>
    <FlexItem>
      <Nav type="inline">
        <NavLink>
          <a href="javascript:void(0);">Home</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">Features</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">Pricing</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">About</a>
        </NavLink>
      </Nav>
    </FlexItem>
    <Form type="inline">
      <FormGroup>
        <input className="form-control" type="text" placeholder="Search" />
      </FormGroup>
      <Button theme="primary">Search</Button>
    </Form>
  </Flex>
</Navbar>
```

**Primary**

```js
<Navbar theme="primary">
  <Flex align="middle">
    <NavbarBrand>Navbar</NavbarBrand>
    <FlexItem>
      <Nav type="inline">
        <NavLink>
          <a href="javascript:void(0);">Home</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">Features</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">Pricing</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">About</a>
        </NavLink>
      </Nav>
    </FlexItem>
    <Form type="inline">
      <FormGroup>
        <input className="form-control no-border" type="text" placeholder="Search" />
      </FormGroup>
      <Button theme="secondary">Search</Button>
    </Form>
  </Flex>
</Navbar>
```

**Inverse**

```js
<Navbar theme="inverse">
  <Flex align="middle">
    <NavbarBrand>Navbar</NavbarBrand>
    <FlexItem>
      <Nav type="inline">
        <NavLink>
          <a href="javascript:void(0);">Home</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">Features</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">Pricing</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">About</a>
        </NavLink>
      </Nav>
    </FlexItem>
    <Form type="inline">
      <FormGroup>
        <input className="form-control no-border" type="text" placeholder="Search" />
      </FormGroup>
      <Button theme="primary">Search</Button>
    </Form>
  </Flex>
</Navbar>
```

**Pure**

```js
<Navbar theme="pure">
  <Flex align="middle">
    <NavbarBrand>Navbar</NavbarBrand>
    <FlexItem>
      <Nav type="inline">
        <NavLink>
          <a href="javascript:void(0);">Home</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">Features</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">Pricing</a>
        </NavLink>
        <NavLink>
          <a href="javascript:void(0);">About</a>
        </NavLink>
      </Nav>
    </FlexItem>
    <Form type="inline">
      <FormGroup>
        <input className="form-control" type="text" placeholder="Search" />
      </FormGroup>
      <Button theme="primary">Search</Button>
    </Form>
  </Flex>
</Navbar>
```