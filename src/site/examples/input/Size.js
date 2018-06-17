/* sourceCode:start */
import React from 'react'
import { Input, Row, Col } from 'react-impression'

const Size = () => {
  return (
    <Row gutter='12'>
      <Col>
        <Input size='large' placeholder='large size' />
      </Col>
      <Col>
        <Input placeholder='default size' />
      </Col>
      <Col>
        <Input size='small' placeholder='small size' />
      </Col>
    </Row>
  )
}
/* sourceCode:end */

Size.title = '不同的size'
Size.desc = `> Input 输入框定义了三种尺寸（大、默认、小）`

export default Size
