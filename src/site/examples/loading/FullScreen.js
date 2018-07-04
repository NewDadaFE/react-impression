/* sourceCode:start */
import React, { Component } from 'react'
import { Loading, Button } from 'react-impression'

class Full extends Component {
  onClick = () => {
    clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      Loading.hide()
    }, 2000)

    Loading.show()
  }

  render() {
    return (
      <div>
        <Button theme='primary' onClick={this.onClick}>
          全屏加载，2秒后消失
        </Button>
        <Loading />
      </div>
    )
  }
}
/* sourceCode:end */

Full.title = '全屏加载'
Full.desc = `> Loading组件直接调用show()方法即可在指定整屏范围内加载`

export default Full
