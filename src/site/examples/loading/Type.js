/* sourceCode:start */
import React, { Component } from 'react'
import { Loading, Row, Col, Button } from 'react-impression'

class Type extends Component {
  // 初始state
  constructor(props, context) {
    super(props, context)
    this.state = {
      type: 'cyclone',
      loading: false,
    }
  }
  /**
   * 显示Loading.
   * @param  {String} type loading类型
   */
  showLoadingHandle = type => {
    this.setState({
      type,
      msg: type,
      loading: true,
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Button
              theme='default'
              onClick={() => this.showLoadingHandle('fountain')}
            >
              fountain
            </Button>
          </Col>
          <Col>
            <Button
              theme='default'
              onClick={() => this.showLoadingHandle('wave')}
            >
              wave
            </Button>
          </Col>
          <Col>
            <Button
              theme='default'
              onClick={() => this.showLoadingHandle('pendule')}
            >
              pendule
            </Button>
          </Col>
          <Col>
            <Button
              theme='default'
              onClick={() => this.showLoadingHandle('cyclone')}
            >
              cyclone
            </Button>
          </Col>
        </Row>
        <Loading
          loading={this.state.loading}
          type={this.state.type}
          loadingMsg={this.state.msg}
        >
          <div
            style={{
              height: '300px',
              lineHeight: '300px',
              textAlign: 'center',
              border: '1px solid #1c89ea',
              color: '#2c89ea',
            }}
          >
            内容区域
          </div>
        </Loading>
      </div>
    )
  }
}
/* sourceCode:end */

Type.title = '四种类型的Loading'
Type.desc = `> fountain, wave, pendule, cyclone, 传入loading状态`

export default Type
