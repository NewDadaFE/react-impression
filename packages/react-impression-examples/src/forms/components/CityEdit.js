import React from 'react'
import {
  Row,
  Col,
  Card,
  Select,
  SelectOption,
  Input,
  Button,
} from 'react-impression'
import styles from './Edit.scss'

function Edit() {
  return (
    <Card block>
      <Row>
        <Col>
          城市选择：
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
          <Input className={styles.side} type='text' />元
        </Col>
      </Row>
      <Row>
        <Col>
          补贴金额：
          <Input className={styles.side} type='text' />元
        </Col>
        <Col>
          时长设置：
          <Input className={styles.side} type='text' />分钟
        </Col>
      </Row>
      <Row>
        <Col>
          规则占比：
          <Input className={styles.side} type='text' />%
        </Col>
      </Row>
      <div className={`text-center ${styles.top}`}>
        <Button className='offset-r'>保存</Button>
        <Button theme='default' className='offset-l'>
          取消
        </Button>
      </div>
    </Card>
  )
}

export default Edit
