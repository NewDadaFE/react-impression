/* sourceCode:start */
import React, { Component } from 'react'
import { Loading, Button } from 'react-impression'

class ShowHide extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      type: 'cyclone',
      loading: false,
      msg: '加载中',
    }
  }
  showLoadingHandle = method => {
    Loading[method]()
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
        <Loading type={this.state.type} loadingMsg={this.state.msg}>
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
ShowHide.desc = `> Loading.show()/Loading.hide()`

export default ShowHide
