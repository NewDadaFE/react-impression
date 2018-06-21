/* sourceCode:start */
import React from 'react'
import { Pagination, Row, Col } from 'react-impression'

const Basic = () => {
  const onSelect = (page, pageSize) => {
    console.log(page, pageSize)
  }
  return (
    <div>
      <Row>
        <Col>
          <Pagination
            defaultActivePage={2}
            totalCount={50}
            onSelect={onSelect}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Pagination defaultActivePage={4} totalCount={500} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Pagination totalCount={500} scope={1} />
        </Col>
      </Row>
    </div>
  )
}
/* sourceCode:end */

Basic.title = '基本使用方式'
Basic.desc = `> 基本分页，例子中设置了不同的defaultActivePage，不同的totalCount，还有不同的scope`

export default Basic
