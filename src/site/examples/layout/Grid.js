/* sourceCode:start */
import React from 'react'
import { Row, Col } from 'react-impression'
import './index.scss'

const Grid = () => {
  return (
    <div>
      <Row>
        <Col styleName='demo-col-on'>1</Col>
        <Col styleName='demo-col'>1</Col>
        <Col styleName='demo-col-on'>1</Col>
        <Col styleName='demo-col'>1</Col>
        <Col styleName='demo-col-on'>1</Col>
        <Col styleName='demo-col'>1</Col>
        <Col styleName='demo-col-on'>1</Col>
        <Col styleName='demo-col'>1</Col>
        <Col styleName='demo-col-on'>1</Col>
        <Col styleName='demo-col'>1</Col>
        <Col styleName='demo-col-on'>1</Col>
        <Col styleName='demo-col'>1</Col>
      </Row>
      <Row>
        <Col styleName='demo-col-on'>2</Col>
        <Col styleName='demo-col'>2</Col>
        <Col styleName='demo-col-on'>2</Col>
        <Col styleName='demo-col'>2</Col>
        <Col styleName='demo-col-on'>2</Col>
        <Col styleName='demo-col'>2</Col>
      </Row>
      <Row>
        <Col styleName='demo-col-on'>3</Col>
        <Col styleName='demo-col'>3</Col>
        <Col styleName='demo-col-on'>3</Col>
        <Col styleName='demo-col'>3</Col>
      </Row>
      <Row>
        <Col styleName='demo-col-on'>4</Col>
        <Col styleName='demo-col'>4</Col>
        <Col styleName='demo-col-on'>4</Col>
      </Row>
      <Row>
        <Col styleName='demo-col-on'>6</Col>
        <Col styleName='demo-col'>6</Col>
      </Row>
      <Row>
        <Col styleName='demo-col-on'>12</Col>
      </Row>
    </div>
  )
}
/* sourceCode:end */

Grid.title = '基础栅格'
Grid.desc = `> 基本的水平排列。使用一组Row和Col组件，就可以创建一个基本的栅格系统`

export default Grid
