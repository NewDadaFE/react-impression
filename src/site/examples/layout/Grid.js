/* sourceCode:start */
import React from 'react'
import { Row, Col } from 'react-impression'
import styles from './index.scss'

const Grid = () => {
  return (
    <div>
      <Row>
        <Col>
          <div className={styles['demo-col-on']}>1</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>1</div>
        </Col>
        <Col>
          <div className={styles['demo-col-on']}>1</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>1</div>
        </Col>
        <Col>
          <div className={styles['demo-col-on']}>1</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>1</div>
        </Col>
        <Col>
          <div className={styles['demo-col-on']}>1</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>1</div>
        </Col>
        <Col>
          <div className={styles['demo-col-on']}>1</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>1</div>
        </Col>
        <Col>
          <div className={styles['demo-col-on']}>1</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>1</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles['demo-col-on']}>2</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>2</div>
        </Col>
        <Col>
          <div className={styles['demo-col-on']}>2</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>2</div>
        </Col>
        <Col>
          <div className={styles['demo-col-on']}>2</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>2</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles['demo-col-on']}>3</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>3</div>
        </Col>
        <Col>
          <div className={styles['demo-col-on']}>3</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>3</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles['demo-col-on']}>4</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>4</div>
        </Col>
        <Col>
          <div className={styles['demo-col-on']}>4</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles['demo-col-on']}>6</div>
        </Col>
        <Col>
          <div className={styles['demo-col']}>6</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles['demo-col-on']}>12</div>
        </Col>
      </Row>
    </div>
  )
}
/* sourceCode:end */

Grid.title = '基础栅格'
Grid.desc = `> 基本的水平排列。使用一组Row和Col组件，就可以创建一个基本的栅格系统`

export default Grid
