/* sourceCode:start */
import React from 'react'
import { Pagination, Row, Col } from 'react-impression'

const JumpSearch = () => {
  const onSelect = (page, pageSize) => {
    console.log(page, pageSize)
  }
  return (
    <div>
      <Row>
        <Col>
          <Pagination totalCount={500} onSelect={onSelect} jumpPage />
        </Col>
      </Row>
    </div>
  )
}
/* sourceCode:end */

JumpSearch.title = '搜索直接跳转页数'
JumpSearch.desc = `> jumpPage参数设为true`

export default JumpSearch
