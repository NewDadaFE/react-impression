/* sourceCode:start */
import React from 'react'
import { Radio, Button } from 'react-impression'

class RadioDisabled extends React.Component {
  state = {
    disabled: true,
  }

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    })
  }

  render() {
    return (
      <div>
        <Radio defaultChecked={false} disabled={this.state.disabled}>
          Disabled 默认不选中
        </Radio>
        <br />
        <Radio defaultChecked disabled={this.state.disabled}>
          Disabled 默认选中
        </Radio>
        <div style={{ marginTop: 30 }}>
          <Button type='primary' onClick={this.toggleDisabled}>
            触发更改disabled的状态
          </Button>
        </div>
      </div>
    )
  }
}
/* sourceCode:end */

RadioDisabled.title = '不可用状态'
RadioDisabled.desc = `> 不可用状态的radio`

export default RadioDisabled
