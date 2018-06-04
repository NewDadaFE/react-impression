/* sourceCode:start */
import React from 'react'
import { Nav } from 'react-impression'

const NavBasic = () => {
  return (
    <Nav defaultActiveKey={1} type='tab'>
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

NavBasic.title = 'tab类型的Nav'
NavBasic.desc = `> tab类型的Nav，设置type为tab`

export default NavBasic
