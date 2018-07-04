/* sourceCode:start */
import React from 'react'
import { Input, Row, Col } from 'react-impression'

const TextArea = () => {
  return (
    <Row gutter={12}>
      <Col>
        <Input type='textarea' placeholder='Basic textarea' />
      </Col>
      <Col>
        <Input type='textarea' autoResize defaultValue='默认value' />
      </Col>
      <Col>
        <Input
          type='textarea'
          placeholder='autoResize minRow maxRow'
          autoResize={{ minRows: 3, maxRows: 6 }}
        />
      </Col>
    </Row>
  )
}
/* sourceCode:end */

TextArea.title = 'textarea'
TextArea.desc = `> textarea的其他属性和input的属性一样，可以设置是否自动高度`

export default TextArea
