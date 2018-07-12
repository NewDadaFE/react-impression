import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Card, Row, Col } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

export default class ModalView extends Component {
  static propTypes = {
    routes: PropTypes.array,
  }
  // 构造函数
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
      size,
      show: !this.state.show,
    })
  }
  render() {
    return (
      <div>
        <Breadcrumb routes={this.props.routes} />
        <Card block noborder>
          <h5>Examples</h5>
          <Card>
            <Card.Block>
              <Row>
                <Col>
                  <Button
                    theme='primary'
                    onClick={() => this.toggleModalHandle(null)}
                  >
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
            </Card.Block>
            <Highlight>
              {'import { Modal } from "impression-react";\n\n'}
              {'<Modal>\n'}
              {'  <Modal.Header>...</Modal.Header>\n'}
              {'  <Modal.Body>...</Modal.Body>\n'}
              {'  <Modal.Footer>...</Modal.Footer>\n'}
              {'</Modal>\n'}
              {
                '<Modal size="sm">\n  ...\n</Modal>\n<Modal size="lg">\n  ...\n</Modal>'
              }
            </Highlight>
          </Card>
          <h5 className='text-secondary'>Modal API</h5>
          <CommenTable
            data={[
              ['size', '设置模态框大小，可选值为 sm、lg', 'string', ''],
              ['className', '自定义样式', 'string', ''],
            ]}
          />
          <h5 className='text-secondary'>Modal.Header API</h5>
          <CommenTable data={[['className', '自定义样式', 'string', '']]} />
          <h5 className='text-secondary'>Modal.Body API</h5>
          <CommenTable data={[['className', '自定义样式', 'string', '']]} />
          <h5 className='text-secondary'>Modal.Footer API</h5>
          <CommenTable data={[['className', '自定义样式', 'string', '']]} />
        </Card>
        {this.state.show && (
          <Modal size={this.state.size}>
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
              <Button theme='default' onClick={this.toggleModalHandle}>
                Close
              </Button>
              <Button theme='primary'>Save</Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    )
  }
}
