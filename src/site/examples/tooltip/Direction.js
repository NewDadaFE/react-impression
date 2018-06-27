/* sourceCode:start */
import React from 'react'
import { Row, Col, Tooltip, Button } from 'react-impression'

const onMouseOver = event => {
  console.log(event)
}

const Direction = () => {
  return (
    <Row>
      <Col>
        <Tooltip position='top' content='Tooltip top' onMouseOver={onMouseOver}>
          <Button theme='primary'>Top</Button>
        </Tooltip>
      </Col>
      <Col>
        <Tooltip position='bottom' content='Tooltip bottom'>
          <Button theme='primary'>Bottom</Button>
        </Tooltip>
      </Col>
      <Col>
        <Tooltip position='left' content='Tooltip left'>
          <Button theme='primary'>Left</Button>
        </Tooltip>
      </Col>
      <Col>
        <Tooltip position='right' content='Tooltip right'>
          <Button theme='primary'>Right</Button>
        </Tooltip>
      </Col>
    </Row>
  )
}
/* sourceCode:end */

Direction.title = 'tooltip的四个方向'
Direction.desc = `> Tooltip的气泡浮层不会放置复杂的子节点文本和操作，鼠标移入则显示提示，移出消失。例子为气泡四个方向的展示`

export default Direction
