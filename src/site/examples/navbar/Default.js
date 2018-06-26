/* sourceCode:start */
import React from 'react'
import { Navbar, Nav, Flex } from 'react-impression'

const NavbarDefault = () => {
  return (
    <Navbar>
      <Flex>
        <Navbar.Brand>导航栏</Navbar.Brand>
        <Flex.Item>
          <Nav type='inline'>
            <Nav.Link>
              <a href='javascript:void(0)'>绩效</a>
            </Nav.Link>
            <Nav.Link>
              <a href='javascript:void(0)'>考核</a>
            </Nav.Link>
            <Nav.Link>
              <a href='javascript:void(0)'>审批</a>
            </Nav.Link>
            <Nav.Link>
              <a href='javascript:void(0)'>系统</a>
            </Nav.Link>
          </Nav>
        </Flex.Item>
      </Flex>
    </Navbar>
  )
}
/* sourceCode:end */

NavbarDefault.title = '默认主题'
NavbarDefault.desc = `> 默认主题`

export default NavbarDefault
