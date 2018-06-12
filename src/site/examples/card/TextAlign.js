/* sourceCode:start */
import React from 'react'
import { Card, Row, Col, Image } from 'react-impression'

const TextAlign = () => {
  return (
    <Row gutter='12'>
      <Col>
        <Card>
          <Image fluid src='http://placehold.it/350x200' />
          <Card.Block>
            <h4>Left</h4>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <a href='javascript:void(0);'>Card link</a>
            <a href='javascript:void(0);' className='offset-l'>
              Another link
            </a>
          </Card.Block>
        </Card>
      </Col>
      <Col>
        <Card className='text-center'>
          <Image fluid src='http://placehold.it/350x200' />
          <Card.Block>
            <h4>Center</h4>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <a href='javascript:void(0);'>Card link</a>
            <a href='javascript:void(0);' className='offset-l'>
              Another link
            </a>
          </Card.Block>
        </Card>
      </Col>
      <Col>
        <Card className='text-right'>
          <Image fluid src='http://placehold.it/350x200' />
          <Card.Block>
            <h4>Right</h4>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <a href='javascript:void(0);'>Card link</a>
            <a href='javascript:void(0);' className='offset-l'>
              Another link
            </a>
          </Card.Block>
        </Card>
      </Col>
    </Row>
  )
}
/* sourceCode:end */

TextAlign.title = '卡片中图片和文字的排列'
TextAlign.desc = `> 文字居左居中居右的排列`

export default TextAlign
