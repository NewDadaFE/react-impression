/* sourceCode:start */
import React, { Component } from 'react'
import { Confirm, Row, Col, Button } from 'react-impression'

class Theme extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      showConfirm1: false,
      showConfirm2: false,
      showConfirm3: false,
    }
  }
  toggleConfirm1Handle = () => {
    this.setState({
      showConfirm1: !this.state.showConfirm1,
    })
  }
  toggleConfirm2Handle = () => {
    this.setState({
      showConfirm2: !this.state.showConfirm2,
    })
  }
  toggleConfirm3Handle = () => {
    this.setState({
      showConfirm3: !this.state.showConfirm3,
    })
  }
  render() {
    let { showConfirm1, showConfirm2, showConfirm3 } = this.state

    return (
      <div>
        <Row>
          <Col>
            <Button
              theme='secondary'
              outline
              onClick={this.toggleConfirm1Handle}
            >
              warning
            </Button>
          </Col>
          <Col>
            <Button theme='default' outline onClick={this.toggleConfirm2Handle}>
              <span className='text-danger'>danger</span>
            </Button>
          </Col>
          <Col>
            <Button theme='primary' outline onClick={this.toggleConfirm3Handle}>
              info
            </Button>
          </Col>
        </Row>
        {/* 此处有bug 添加Confirm节点之后row变成不是最后一个，会产生margin-bottom */}
        <Confirm
          type='warning'
          onOkClick={this.toggleConfirm1Handle}
          onCancelClick={this.toggleConfirm1Handle}
          visible={showConfirm1}
        >
          您确定删除消费记录？
        </Confirm>
        <Confirm
          type='danger'
          onOkClick={this.toggleConfirm2Handle}
          onCancelClick={this.toggleConfirm2Handle}
          visible={showConfirm2}
        >
          您确定注销该银行卡？
        </Confirm>
        <Confirm
          type='info'
          onOkClick={this.toggleConfirm3Handle}
          onCancelClick={this.toggleConfirm3Handle}
          visible={showConfirm3}
        >
          您确定购买该航班机票？
        </Confirm>
      </div>
    )
  }
}

/* sourceCode:end */

Theme.title = '基本用法'
Theme.desc = `> 几种主题的confirm弹出框`

export default Theme
