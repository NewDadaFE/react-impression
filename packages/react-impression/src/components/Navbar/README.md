### Example

**无按钮有导航**

```jsx
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
      <i className="fa fa-search" />
    </NavbarButton>
  </Flex>
</Navbar>
```

**有按钮无导航**

```jsx
<Navbar>
  <Flex>
    <NavbarButton>
      <i className="fa fa-bars" />
    </NavbarButton>
    <FlexItem />
    <NavbarButton>
      <i className="fa fa-search" />
    </NavbarButton>
  </Flex>
</Navbar>
```

**有按钮有导航**

```jsx
<Navbar>
  <Flex>
    <NavbarButton>
      <i className="fa fa-bars" />
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
      <i className="fa fa-search" />
    </NavbarButton>
  </Flex>
</Navbar>
```
