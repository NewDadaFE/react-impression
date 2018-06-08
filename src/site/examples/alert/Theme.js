/* sourceCode:start */
import React, { Component } from 'react'
import { Alert, Row, Col, Button } from 'react-impression'

class Theme extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      showAlert1: false,
      showAlert2: false,
      showAlert3: false,
    }
  }
  toggleAlert1Handle = () => {
    this.setState({
      showAlert1: !this.state.showAlert1,
    })
  }
  toggleAlert2Handle = () => {
    this.setState({
      showAlert2: !this.state.showAlert2,
    })
  }
  toggleAlert3Handle = () => {
    this.setState({
      showAlert3: !this.state.showAlert3,
    })
  }
  render() {
    let { showAlert1, showAlert2, showAlert3 } = this.state

    return (
      <div>
        <Row>
          <Col>
            <Button theme='primary' outline onClick={this.toggleAlert1Handle}>
              default
            </Button>
          </Col>
          <Col>
            <Button theme='danger' outline onClick={this.toggleAlert2Handle}>
              danger
            </Button>
          </Col>
          <Col>
            <Button theme='primary' onClick={this.toggleAlert3Handle}>
              none
            </Button>
          </Col>
        </Row>
        {/* 此处有bug 添加alert节点之后row变成不是最后一个，会产生margin-bottom */}
        <Alert
          type='warning'
          onClick={this.toggleAlert1Handle}
          visible={showAlert1}
        >
          姓名不能为空！
        </Alert>
        <Alert
          type='danger'
          onClick={this.toggleAlert2Handle}
          visible={showAlert2}
        >
          请先选择所属城市！
        </Alert>
        <Alert
          type='none'
          onClick={this.toggleAlert3Handle}
          visible={showAlert3}
        >
          这是一个没有icon的alert！
        </Alert>
      </div>
    )
  }
}
/* sourceCode:end */

Theme.title = '基本用法'
Theme.desc = `> 几种主题的alert弹出框`

export default Theme
