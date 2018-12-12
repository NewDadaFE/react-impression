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
import PropTypes from 'prop-types'
import styles from './Option.scss'

function Option(props) {
  const { cityList, set, search } = props
  return (
    <Card block className={styles.option}>
      <Row>
        <Col col='3'>
          城市：
          <div>
            <Select
              searchable
              onChange={val => set('cityId', val)}
              className={styles.full}
            >
              {cityList.map(item => (
                <SelectOption value={item.id} key={item.id}>
                  {item.name}
                </SelectOption>
              ))}
            </Select>
          </div>
        </Col>
        <Col col='3'>
          状态：
          <div>
            <Select
              onChange={val => set('status', val)}
              className={styles.full}
            >
              <SelectOption value='1'>是</SelectOption>
              <SelectOption value='2'>否</SelectOption>
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
            <Button outline onClick={search}>
              搜索
            </Button>
            <Button className='offset-l'>新增</Button>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

Option.propTypes = {
  cityList: PropTypes.array.isRequired,
  set: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
}

export default Option
