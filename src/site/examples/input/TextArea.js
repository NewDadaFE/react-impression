/* sourceCode:start */
import React from 'react'
import { Input, Row, Col } from 'react-impression'

const { TextArea } = Input

const TextAreaExample = () => {
  return (
    <Row gutter={12}>
      <Col>
        <TextArea placeholder='Basic textarea' />
      </Col>
      <Col>
        <TextArea autoResize defaultValue='默认value' />
      </Col>
      <Col>
        <TextArea
          placeholder='autoResize minRow maxRow'
          autoResize={{ minRows: 3, maxRows: 6 }}
        />
      </Col>
    </Row>
  )
}
/* sourceCode:end */

TextAreaExample.title = 'textarea'
TextAreaExample.desc = `> textarea的其他属性和input的属性一样，可以设置是否自动高度`

export default TextAreaExample
