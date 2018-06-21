/* sourceCode:start */
import React, { Component } from 'react'
import { Modal, Button, Switch, Row, Col } from 'react-impression'

class Overflow extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      show: false,
      size: null,
      isLimitHeight: false,
    }
  }
  // 显示/隐藏modal
  toggleModalHandle = size => {
    this.setState({
      size: size || '',
      show: !this.state.show,
    })
  }

  toggleModalLimitHeight = value => {
    this.setState({
      isLimitHeight: value,
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <label className='offset-r-lg'>is Modal limitHeight</label>
            <Switch onChange={this.toggleModalLimitHeight} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button theme='primary' onClick={() => this.toggleModalHandle()}>
              Show Modal
            </Button>
          </Col>
        </Row>
        <Modal
          size={this.state.size}
          visible={this.state.show}
          isLimitHeight={this.state.isLimitHeight}
        >
          <Modal.Header>
            <Button close onClick={() => this.toggleModalHandle()}>
              &times;
            </Button>
            <h5 className='no-margin'>Modal title</h5>
          </Modal.Header>
          <Modal.Body>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
            <p>more contents&hellip;</p>
          </Modal.Body>
          <Modal.Footer>
            <Button theme='default' onClick={() => this.toggleModalHandle()}>
              Close
            </Button>
            <Button theme='primary'>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
/* sourceCode:end */

Overflow.title = '多内容情况'
Overflow.desc = `> 内容多的时候会有最大内容高度，可滚动查看内容,也可以完全展开，由isLimitHeight参数决定`

export default Overflow
