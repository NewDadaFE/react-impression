import React from 'react'
import {
  Card,
  Row,
  Col,
  Select,
  SelectOption,
  Input,
  Button,
} from 'react-impression'
import styles from './Option.scss'

function Option() {
  return (
    <Card block className={styles.option}>
      <Row>
        <Col col='3'>
          城市：
          <div>
            <Select className={styles.full}>
              <SelectOption value='1'>22</SelectOption>
            </Select>
          </div>
        </Col>
        <Col col='3'>
          状态：
          <div>
            <Select className={styles.full}>
              <SelectOption value='1'>22</SelectOption>
            </Select>
          </div>
        </Col>
        <Col col='3'>
          ID：
          <div>
            <Input className={styles.full} type='text' />
          </div>
        </Col>
        <Col>
          <div className={styles.position}>
            <Button outline>搜索</Button>
            <Button className='offset-l'>新增</Button>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default Option
