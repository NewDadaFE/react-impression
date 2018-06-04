/* sourceCode:start */
import React from 'react'
import { Nav, Row, Col, Card } from 'react-impression'

const NavBasic = () => {
  return (
    <Row>
      <Col col='3'>
        <Card>
          <Nav defaultActiveKey={2} type='pill' stacked>
            <Nav.Item eventKey={1}>Active</Nav.Item>
            <Nav.Item eventKey={2}>Link</Nav.Item>
            <Nav.Item eventKey={3}>Anothor link</Nav.Item>
            <Nav.Item eventKey={4} disabled>
              Disabled
            </Nav.Item>
          </Nav>
        </Card>
      </Col>
    </Row>
  )
}
/* sourceCode:end */

NavBasic.title = '纵向排列'
NavBasic.desc = `> 纵向排列pill类型的Nav`

export default NavBasic
