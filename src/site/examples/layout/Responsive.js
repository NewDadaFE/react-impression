/* sourceCode:start */
import React from 'react'
import { Row, Col } from 'react-impression'
import './index.scss'

const Responsive = () => {
  return (
    <Row>
      <Col xs='1' sm='2' md='3' lg='4' xl='5'>
        <div styleName='demo-col-on-light'>Col</div>
      </Col>
      <Col xs={10} sm={8} md={6} lg={4} xl={2}>
        <div styleName='demo-col-on'>Col</div>
      </Col>
      <Col xs='1' sm='2' md='3' lg='4' xl='5'>
        <div styleName='demo-col-on-light'>Col</div>
      </Col>
    </Row>
  )
}
/* sourceCode:end */

Responsive.title = '响应式栅格'
Responsive.desc = `> 参照Bootstrap的响应式设计，设置五个响应尺寸：xs sm md lg xl,可以传入字符串形式或者数字`

export default Responsive
