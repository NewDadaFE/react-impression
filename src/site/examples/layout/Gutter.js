/* sourceCode:start */
import React from 'react'
import { Row, Col } from 'react-impression'
import styles from './index.scss'

const Gutter = () => {
  return (
    <Row gutter={12}>
      <Col>
        <div className={styles['demo-col-on']}>Col</div>
      </Col>
      <Col>
        <div className={styles['demo-col']}>Col</div>
      </Col>
      <Col>
        <div className={styles['demo-col-on']}>Col</div>
      </Col>
      <Col>
        <div className={styles['demo-col']}>Col</div>
      </Col>
    </Row>
  )
}
/* sourceCode:end */

Gutter.title = '分栏间隔'
Gutter.desc = `> 分栏之间存在间隔，Row组件上设置gutter参数`

export default Gutter
