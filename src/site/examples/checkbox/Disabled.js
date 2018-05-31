/* sourceCode:start */
import React from 'react'
import { Checkbox, Button } from 'react-impression'

class CheckboxDisabled extends React.Component {
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
        <Checkbox defaultChecked={false} disabled={this.state.disabled}>
          Disabled 默认不选中
        </Checkbox>
        <br />
        <Checkbox defaultChecked disabled={this.state.disabled}>
          Disabled 默认选中
        </Checkbox>
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

CheckboxDisabled.title = '不可用状态'
CheckboxDisabled.desc = `> 不可用状态的Checkbox`

export default CheckboxDisabled
