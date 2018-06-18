/* sourceCode:start */
import React from 'react'
import { Attention, Row, Col } from 'react-impression'

const Link = () => {
  return (
    <div>
      <Row>
        <Col>
          <Attention theme='success'>
            You successfully read this important attention message
            <Attention.Link href='#'> click here</Attention.Link>.
          </Attention>
        </Col>
      </Row>
      <Row>
        <Col>
          <Attention theme='primary'>
            This attention needs your attention, but it&apos;s not super
            important
            <Attention.Link href='#'> click here</Attention.Link>.
          </Attention>
        </Col>
      </Row>
      <Row>
        <Col>
          <Attention theme='warning'>
            Better check yourself, you&apos;re not looking too good
            <Attention.Link href='#'> click here</Attention.Link>.
          </Attention>
        </Col>
      </Row>
      <Row>
        <Col>
          <Attention theme='danger'>
            Change a few things up and try submitting again
            <Attention.Link href='#'> click here</Attention.Link>.
          </Attention>
        </Col>
      </Row>
    </div>
  )
}
/* sourceCode:end */

Link.title = 'Attention.Link'
Link.desc = `> 组件中展示链接部分内容`

export default Link
