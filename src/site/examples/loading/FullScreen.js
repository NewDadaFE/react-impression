/* sourceCode:start */
import React, { Component } from 'react'
import { Loading, Button } from 'react-impression'

class Full extends Component {
  // 初始state
  constructor(props) {
    super(props)

    this.state = {
      fullScreen: false,
    }
  }

  onClick = () => {
    clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      this.setState({
        fullScreen: false,
      })
    }, 2000000)

    this.setState({
      fullScreen: true,
    })
  }

  render() {
    return (
      <div>
        <Button theme='primary' onClick={this.onClick}>
          全屏加载，2秒后消失
        </Button>
        {this.state.fullScreen && <Loading full />}
      </div>
    )
  }
}
/* sourceCode:end */

Full.title = '全屏加载'
Full.desc = `> Loading组件加上full参数即可，此时不需要在组件内加子组件`

export default Full
