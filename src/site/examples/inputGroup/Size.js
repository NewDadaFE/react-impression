/* sourceCode:start */
import React from 'react'
import { InputGroup, Row, Col, Input } from 'react-impression'

const Size = () => {
  return (
    <Row gutter='12'>
      <Col col='3'>
        <InputGroup size='sm'>
          <Input placeholder='something' />
          <InputGroup.Button theme='primary'>Search</InputGroup.Button>
        </InputGroup>
      </Col>
      <Col col='4'>
        <InputGroup>
          <Input placeholder='something' />
          <InputGroup.Button theme='primary'>Search</InputGroup.Button>
        </InputGroup>
      </Col>
      <Col col='5'>
        <InputGroup size='lg'>
          <Input placeholder='something' />
          <InputGroup.Button theme='primary'>Search</InputGroup.Button>
        </InputGroup>
      </Col>
    </Row>
  )
}
/* sourceCode:end */

Size.title = 'inputGroup的size'
Size.desc = `> InputGroup的size可以是lg和sm或者默认`

export default Size
