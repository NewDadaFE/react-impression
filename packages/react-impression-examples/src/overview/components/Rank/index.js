import React from 'react'
import { Card, Row, Col } from 'react-impression'
import CustomTable from './Table'
import PirChart from './PieChart'
import styles from './Index.module.scss'

export default function HealthAnalysis(props) {
  return (
    <Card>
      <h4 className={styles.title}>员工统计</h4>
      <Row>
        <Col col='5'>
          <PirChart />
        </Col>
        <Col col='7'>
          <CustomTable />
        </Col>
      </Row>
    </Card>
  )
}
