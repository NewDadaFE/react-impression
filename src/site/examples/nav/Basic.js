/* sourceCode:start */
import React from 'react'
import { Nav } from 'react-impression'

const callback = key => {
  console.log(key)
}

const NavBasic = () => {
  return (
    <Nav defaultActiveKey={1} onSelect={callback}>
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

NavBasic.title = '基本用法'
NavBasic.desc = `> 默认选中第一项，此例中第二项设为了disabled`

export default NavBasic
