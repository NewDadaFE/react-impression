import React from 'react'
import { Card, CardBlock, Row, Col } from 'react-impression'

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

const styles = {
  box: {
    textAlign: 'center',
  },
  name: {
    color: '#666',
    lineHeight: '14px',
    fontSize: '14px',
  },
  value: {
    color: '#333',
    fontWeight: '500',
    fontSize: '22px',
    lineHeight: '30px',
    marginTop: '8px',
  },
}

export default class Overview extends React.Component {
  render() {
    return (
      <Card>
        <CardBlock>
          <Row>
            {mockData.map((item, index) => {
              return (
                <Col key={index}>
                  <div style={styles.box}>
                    <div style={styles.name}>{item.name}</div>
                    <div style={styles.value}>{item.value}</div>
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
