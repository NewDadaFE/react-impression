/* sourceCode:start */
import React from 'react'
import { Upload, Row, Col } from 'react-impression'

const onChangeHandle = e => {
  console.log(e)
}

const Basic = () => {
  return (
    <Row gutter='12'>
      <Col>
        <Upload placeholder='请上传资质证明' onChange={onChangeHandle} />
      </Col>
      <Col>
        <Upload btnText='附件' btnType='primary' />
      </Col>
    </Row>
  )
}
/* sourceCode:end */

Basic.title = '基本file类型文件上传'
Basic.desc = `> 点击整个边框内区域都可以触发文件选择`

export default Basic
