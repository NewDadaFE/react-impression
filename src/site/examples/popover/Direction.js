import PropTypes from 'prop-types'
/* sourceCode:start */
import React from 'react'
import { Popover, Button, Row, Col } from 'react-impression'

const Direction = ({ onMouseOver }) => {
  let content = '<div>content</div><div>content</div>'

  return (
    <Row>
      <Col>
        <Popover
          position='top'
          title='popover'
          content={content}
          onMouseOver={onMouseOver}
        >
          <Button theme='primary'>Top</Button>
        </Popover>
      </Col>
      <Col>
        <Popover position='bottom' title='popover' content={content}>
          <Button theme='primary'>Bottom</Button>
        </Popover>
      </Col>
      <Col>
        <Popover position='left' title='popover' content={content}>
          <Button theme='primary'>Left</Button>
        </Popover>
      </Col>
      <Col>
        <Popover position='right' title='popover' content={content}>
          <Button theme='primary'>Right</Button>
        </Popover>
      </Col>
    </Row>
  )
}
/* sourceCode:end */
Direction.propTypes = {
  onMouseOver: PropTypes.func,
}

Direction.title = 'popover方向'
Direction.desc = `> 当目标元素有进一步的描述和相关操作时，可以用popover根据用户的操作行为进行展现。和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。`

export default Direction
