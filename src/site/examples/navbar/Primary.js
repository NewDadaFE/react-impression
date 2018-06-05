/* sourceCode:start */
import React from 'react'
import { Navbar, Nav, Flex } from 'react-impression'

const NavbarPrimary = () => {
  return (
    <Navbar theme='primary'>
      <Flex>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Flex.Item>
          <Nav type='inline'>
            <Nav.Link>
              <a href='javascript:void(0)'>Home</a>
            </Nav.Link>
            <Nav.Link>
              <a href='javascript:void(0)'>Features</a>
            </Nav.Link>
            <Nav.Link>
              <a href='javascript:void(0)'>Pricing</a>
            </Nav.Link>
            <Nav.Link>
              <a href='javascript:void(0)'>About</a>
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
