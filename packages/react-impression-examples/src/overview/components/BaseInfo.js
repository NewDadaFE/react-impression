import React from 'react'
import { Card, Row, Col } from 'react-impression'
import classNames from 'classnames'
import styles from './BaseInfo.module.scss'

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
    title: '运营',
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
  render() {
    return (
      <Row>
        {mockData.map((item, index) => {
          const scoreColor = item.score.value > 90 ? 'green' : 'yellow'
          const consumeColor = item.consume.value > 90 ? 'green' : 'yellow'
          return (
            <Col key={index}>
              <Card>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.body}>
                  <div className={styles.cell}>
                    <div className={styles.cellName}>{item.score.name}</div>
                    <div className={classNames('cellValue', scoreColor)}>
                      {item.score.value}
                    </div>
                    <div className={classNames(consumeColor)}>
                      {item.score.desc}
                    </div>
                  </div>
                  <div className={styles.cell}>
                    <div className={styles.cellName}>{item.consume.name}</div>
                    <div className={classNames(styles.cellValue, styles.black)}>
                      {item.consume.value}
                    </div>
                    <div className={styles.grey}>
                      <span className={styles.ratioLabel}>环比</span>
                      <span>{item.consume.ratio}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.footer}>
                  <div className={styles.item}>
                    <div className={styles.itemLabel}>当日利润： </div>
                    <div className={styles.itemValue}>{item.profit}</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.itemLabel}>待开通账号： </div>
                    <div className={styles.itemValue}>{item.account}</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.itemLabel}>异常处理： </div>
                    <div className={styles.itemValue}>{item.abnormal}</div>
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
