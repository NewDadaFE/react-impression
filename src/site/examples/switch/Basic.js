/* sourceCode:start */
import React from 'react'
import { Switch, Row, Col } from 'react-impression'

const Basic = () => {
  const onChange = value => {
    console.log(value)
  }

  return (
    <Row>
      <Col>
        <label className='offset-r-lg'>Default</label>
        <Switch defaultChecked onChange={onChange} />
      </Col>
      <Col>
        <label className='offset-r-lg'>Disabled</label>
        <Switch disabled defaultChecked />
      </Col>
    </Row>
  )
}
/* sourceCode:end */

Basic.title = '基本用法'
Basic.desc = `> 切换状态`

export default Basic
