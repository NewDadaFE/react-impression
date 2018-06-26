/* sourceCode:start */
import React, { Component } from 'react'
import { Loading, Button } from 'react-impression'

class ShowHide extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      type: 'fountain',
      msg: '加载中',
    }
  }
  showLoadingHandle = method => {
    Loading[method](this.refs.loading)
  }
  render() {
    return (
      <div>
        <Button theme='primary' onClick={() => this.showLoadingHandle('show')}>
          show
        </Button>
        <Button
          className='offset-l-lg'
          theme='default'
          onClick={() => this.showLoadingHandle('hide')}
        >
          hide
        </Button>
        <Loading
          ref='loading'
          type={this.state.type}
          loadingMsg={this.state.msg}
          full={false}
        >
          <div
            style={{
              height: '300px',
              lineHeight: '300px',
              textAlign: 'center',
              marginTop: '20px',
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

ShowHide.title = '调用api'
ShowHide.desc = `> Loading.show()/Loading.hide() 注意：一个页面中如果有多个Loading的实例，需要传入ref参数来调用api`

export default ShowHide
