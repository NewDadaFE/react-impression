/* sourceCode:start */
import React from 'react'
import { Input, Row, Col } from 'react-impression'

const Basic = () => {
  const onChange = e => {
    console.log(e)
  }
  return (
    <Row>
      <Col>
        <Input
          style={{ width: '200px' }}
          placeholder='Basic usage'
          onChange={onChange}
        />
      </Col>
      <Col>
        <Input
          className='offset-l-lg'
          disabled
          style={{ width: '200px' }}
          placeholder='disabled'
        />
      </Col>
      <Col>
        <Input
          className='offset-l-lg'
          pill
          style={{ width: '200px' }}
          placeholder='pill'
        />
      </Col>
    </Row>
  )
}
/* sourceCode:end */

Basic.title = '基本用法'
Basic.desc = `> 最简单的input`

export default Basic
