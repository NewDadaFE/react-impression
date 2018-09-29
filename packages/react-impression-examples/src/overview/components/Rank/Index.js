import React from 'react'
import { Card, Row, Col } from 'react-impression'
import CustomTable from './Table'
import PirChart from './PieChart'
import './index.module.scss'

export default class HealthAnalysis extends React.Component {
  render() {
    return (
      <Card>
        <h4 styleName='title'>员工统计</h4>
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
}
