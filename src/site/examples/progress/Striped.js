/* sourceCode:start */
import React from 'react'
import { Progress, Row, Col } from 'react-impression'

const Theme = () => {
  return (
    <div>
      <Row>
        <Col>
          <Progress percent='50' striped />
        </Col>
      </Row>
    </div>
  )
}
/* sourceCode:end */

Theme.title = '带流动斑马线的progress'
Theme.desc = `> striped属性设置为true`

export default Theme
