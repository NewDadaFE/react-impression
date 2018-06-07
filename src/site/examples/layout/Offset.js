/* sourceCode:start */
import React from 'react'
import { Row, Col } from 'react-impression'
import './index.scss'

const Offset = () => {
  return (
    <div>
      <Row>
        <Col col='4' styleName='demo-col-on'>
          col-4
        </Col>
        <Col col='4' offset='4' styleName='demo-col-on'>
          col-4 offset-4
        </Col>
      </Row>
      <Row>
        <Col col='3' styleName='demo-col-on'>
          col-3 offset-3
        </Col>
        <Col col='3' offset='3' styleName='demo-col-on'>
          col-3 offset-3
        </Col>
      </Row>
      <Row>
        <Col col='6' offset='3' styleName='demo-col-on'>
          col-6 offset-3
        </Col>
      </Row>
    </div>
  )
}
/* sourceCode:end */

Offset.title = '左右偏移'
Offset.desc = `> 使用 offset 可以将列向右侧偏。例如，offset='4' 将元素向右侧偏移了 4 个列的宽度。`

export default Offset
