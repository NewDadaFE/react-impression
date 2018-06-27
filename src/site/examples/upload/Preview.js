/* sourceCode:start */
import React from 'react'
import { Upload, Row, Col, Icon } from 'react-impression'

const Preview = () => {
  return (
    <Row>
      <Col>
        <Upload preview />
      </Col>
      <Col>
        <Upload preview message='上传图片'>
          <Icon type='plus' />
        </Upload>
      </Col>
      <Col>
        <Upload
          src='https://nzfq0mp27.qnssl.com/0.1.18/homeV3/images/enjoy.jpg'
          preview
        />
      </Col>
    </Row>
  )
}
/* sourceCode:end */

Preview.title = '图片类型文件上传'
Preview.desc = `> 上传之后可以看到图片的预览图`

export default Preview
