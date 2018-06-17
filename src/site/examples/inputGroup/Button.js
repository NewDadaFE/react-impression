/* sourceCode:start */
import React from 'react'
import { InputGroup, Row, Col, Input } from 'react-impression'

const Button = () => {
  return (
    <Row gutter='12'>
      <Col>
        <InputGroup>
          <InputGroup.Button theme='default'>help</InputGroup.Button>
          <Input placeholder='something' />
        </InputGroup>
      </Col>
      <Col>
        <InputGroup>
          <Input placeholder='something' />
          <InputGroup.Button theme='primary'>Go</InputGroup.Button>
        </InputGroup>
      </Col>
      <Col>
        <InputGroup>
          <InputGroup.Button theme='default'>-</InputGroup.Button>
          <Input placeholder='something' />
          <InputGroup.Button theme='default'>+</InputGroup.Button>
        </InputGroup>
      </Col>
    </Row>
  )
}
/* sourceCode:end */

Button.title = 'inputGroup内的button'
Button.desc = `> InputGroup.Button`

export default Button
