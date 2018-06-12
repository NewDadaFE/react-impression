/* sourceCode:start */
import React, { Component } from 'react'
import { Modal, Button } from 'react-impression'

class Overflow extends Component {
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
        <Button theme='primary' onClick={() => this.toggleModalHandle()}>
          Modal
        </Button>
        <Modal size={this.state.size} visible={this.state.show}>
          <Modal.Header>
            <Button close onClick={this.toggleModalHandle}>
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
Overflow.desc = `> 内容多的时候会有最大内容高度，可滚动查看内容`

export default Overflow
