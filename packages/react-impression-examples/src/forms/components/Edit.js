import React from 'react'
import { Row, Col, Card, Select, SelectOption, Input } from 'react-impression'
import styles from './Edit.scss'

function Edit() {
  return (
    <Card block>
      <Row>
        <Col>
          城市：
          <Select>
            <SelectOption value='1'>哈哈</SelectOption>
          </Select>
        </Col>
      </Row>
      <Row>
        <Col>
          拒绝次数：
          <Input className={styles.side} type='text' />次
        </Col>
        <Col>
          扣款金额：
          <Input type='text' />元
        </Col>
      </Row>
      <Row>
        <Col>
          每单补贴：
          <Input type='text' />元
        </Col>
        <Col>
          听单时长：
          <Input type='text' />分钟
        </Col>
      </Row>
    </Card>
  )
}

export default Edit
