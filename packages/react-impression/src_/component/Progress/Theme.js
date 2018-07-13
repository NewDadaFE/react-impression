/* sourceCode:start */
import React from 'react'
import { Progress, Row, Col } from 'react-impression'

const Theme = () => {
  return (
    <div>
      <Row>
        <Col>
          <Progress value={20} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Progress value={30} theme='success' />
        </Col>
      </Row>
      <Row>
        <Col>
          <Progress value={40} theme='warning' />
        </Col>
      </Row>
      <Row>
        <Col>
          <Progress value={50} theme='danger' />
        </Col>
      </Row>
    </div>
  )
}
/* sourceCode:end */

Theme.title = '几种主题的progress'
Theme.desc = `> dafault success warning danger`

export default Theme
