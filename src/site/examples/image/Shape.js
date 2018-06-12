/* sourceCode:start */
import React from 'react'
import { Image, Row, Col } from 'react-impression'

const Fluid = () => {
  return (
    <Row>
      <Col>
        <Image rounded src='http://placehold.it/200x200' />
      </Col>
      <Col>
        <Image circle src='http://placehold.it/200x200' />
      </Col>
      <Col>
        <Image thumbnail src='http://placehold.it/200x200' />
      </Col>
    </Row>
  )
}
/* sourceCode:end */

Fluid.title = '基本用法'
Fluid.desc = `>  自适应的图片`

export default Fluid
