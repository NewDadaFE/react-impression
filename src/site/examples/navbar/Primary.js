/* sourceCode:start */
import React from 'react'
import { Navbar, Nav, Flex } from 'react-impression'

const NavbarPrimary = () => {
  return (
    <Navbar theme='primary'>
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

NavbarPrimary.title = 'Primary'
NavbarPrimary.desc = `> Primary`

export default NavbarPrimary
