/* sourceCode:start */
import React from 'react'
import { InputGroup, Row, Col, Input } from 'react-impression'

const Addon = () => {
  return (
    <Row gutter={12}>
      <Col>
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <Input placeholder='something' />
        </InputGroup>
      </Col>
      <Col>
        <InputGroup>
          <Input placeholder='something' />
          <InputGroup.Addon>@</InputGroup.Addon>
        </InputGroup>
      </Col>
      <Col>
        <InputGroup size='lg'>
          <InputGroup.Addon>@</InputGroup.Addon>
          <Input placeholder='something' />
          <InputGroup.Addon>@</InputGroup.Addon>
        </InputGroup>
      </Col>
      <Col>
        <InputGroup>
          <InputGroup.Addon pure>+86</InputGroup.Addon>
          <Input placeholder='phone' />
        </InputGroup>
      </Col>
    </Row>
  )
}
/* sourceCode:end */

Addon.title = 'inputGroup搭配addon元素'
Addon.desc = `> InputGroup.Button`

export default Addon
