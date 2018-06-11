/* sourceCode:start */
import React, { Component } from 'react'
import { Modal, Button, Row, Col } from 'react-impression'

class Size extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      show: false,
      size: null,
    }
  }
  // 显示/隐藏modal
  toggleModalHandle = size => {
    this.setState({
      size: size || '',
      show: !this.state.show,
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Button theme='primary' onClick={() => this.toggleModalHandle()}>
              Modal
            </Button>
          </Col>
          <Col>
            <Button
              theme='primary'
              onClick={() => this.toggleModalHandle('sm')}
            >
              SM Modal
            </Button>
          </Col>
          <Col>
            <Button
              theme='primary'
              onClick={() => this.toggleModalHandle('lg')}
            >
              LG Modal
            </Button>
          </Col>
        </Row>
        <Modal size={this.state.size} visible={this.state.show}>
          <Modal.Header>
            <Button close onClick={this.toggleModalHandle}>
              &times;
            </Button>
            <h5 className='no-margin'>Modal title</h5>
          </Modal.Header>
          <Modal.Body>
            <p>One fine body&hellip;</p>
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

Size.title = '基本用法,可以选择不同size'
Size.desc = `> 几种size的modal模态框`

export default Size
