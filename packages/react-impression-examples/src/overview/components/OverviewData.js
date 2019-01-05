import React from 'react'
import { Card, CardBlock, Row, Col } from 'react-impression'
import styles from './OverviewData.module.scss'

// MOCK 数据
const mockData = [
  {
    name: '目标人数',
    value: '23,456',
  },
  {
    name: '累计入仓',
    value: '123,789',
  },
  {
    name: '在岗人数',
    value: '3,678',
  },
  {
    name: '活跃人数',
    value: '2,987',
  },
]

export default class Overview extends React.Component {
  render() {
    return (
      <Card>
        <CardBlock>
          <Row>
            {mockData.map((item, index) => {
              return (
                <Col key={index}>
                  <div className={styles.box}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.value}>{item.value}</div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </CardBlock>
      </Card>
    )
  }
}
