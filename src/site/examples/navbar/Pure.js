/* sourceCode:start */
import React from 'react'
import { Navbar, Nav, Flex } from 'react-impression'

const NavbarPure = () => {
  return (
    <Navbar theme='pure'>
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

NavbarPure.title = 'Pure'
NavbarPure.desc = `> Pure`

export default NavbarPure
