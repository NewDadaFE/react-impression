/* sourceCode:start */
import React from 'react'
import { Nav } from 'react-impression'

const NavBasic = () => {
  return (
    <Nav defaultActiveKey={1} type='inline'>
      <Nav.Item eventKey={1}>Active</Nav.Item>
      <Nav.Item eventKey={2}>Link</Nav.Item>
      <Nav.Item eventKey={3}>Anothor link</Nav.Item>
      <Nav.Item eventKey={4} disabled>
        Disabled
      </Nav.Item>
    </Nav>
  )
}
/* sourceCode:end */

NavBasic.title = 'inline类型'
NavBasic.desc = `> 没有border bottom的类型`

export default NavBasic
