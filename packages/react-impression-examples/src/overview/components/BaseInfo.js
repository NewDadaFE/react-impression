import React from 'react'
import { Card, Row, Col } from 'react-impression'
import './BaseInfo.scss'

// MOCK 数据
const mockData = [
  {
    title: '仓库',
    profit: '2.34亿元',
    account: 11,
    abnormal: 2,
    score: {
      name: '资源池人数',
      value: '98',
      desc: '势头良好!',
    },
    consume: {
      name: '离职人数',
      value: '2',
      ratio: '16.63%',
    },
  },
  {
    title: '配送',
    profit: '1.23亿元',
    account: 21,
    abnormal: 3,
    score: {
      name: '资源池人数',
      value: '88',
      desc: '有待提升!',
    },
    consume: {
      name: '离职人数',
      value: '5',
      ratio: '6.21%',
    },
  },
]

export default class BaseInfo extends React.Component {
  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Row>
        {mockData.map((item, index) => {
          const scoreColor = item.score.value > 90 ? 'green' : 'yellow'
          const consumeColor = item.consume.value > 90 ? 'green' : 'yellow'
          return (
            <Col key={index}>
              <Card>
                <div styleName='cardTitle'>{item.title}</div>
                <div styleName='body'>
                  <div styleName='cell'>
                    <div styleName='cellName'>{item.score.name}</div>
                    <div styleName={`cellValue ${scoreColor}`}>
                      {item.score.value}
                    </div>
                    <div styleName={consumeColor}>{item.score.desc}</div>
                  </div>
                  <div styleName='cell'>
                    <div styleName='cellName'>{item.consume.name}</div>
                    <div styleName='cellValue black'>{item.consume.value}</div>
                    <div styleName='grey'>
                      <span styleName='ratioLabel'>环比</span>
                      <span>{item.consume.ratio}</span>
                    </div>
                  </div>
                </div>
                <div styleName='footer'>
                  <div styleName='item'>
                    <div styleName='itemLabel'>当日利润： </div>
                    <div styleName='itemValue'>{item.profit}</div>
                  </div>
                  <div styleName='item'>
                    <div styleName='itemLabel'>待开通账号： </div>
                    <div styleName='itemValue'>{item.account}</div>
                  </div>
                  <div styleName='item'>
                    <div styleName='itemLabel'>异常处理： </div>
                    <div styleName='itemValue'>{item.abnormal}</div>
                  </div>
                </div>
              </Card>
            </Col>
          )
        })}
      </Row>
    )
  }
}
