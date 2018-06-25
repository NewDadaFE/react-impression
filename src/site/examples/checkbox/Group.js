/* sourceCode:start */
import React from 'react'
import { Checkbox } from 'react-impression'
const CheckboxGroup = Checkbox.Group

class Group extends React.Component {
  state = {
    value: [2, 4],
  }

  onChange = value => {
    console.log('Checkbox value is', value)
    this.setState({
      value: value,
    })
  }

  render() {
    return (
      <CheckboxGroup onChange={this.onChange} value={this.state.value}>
        <Checkbox value={1}>第一个</Checkbox>
        <Checkbox value={2}>第二个</Checkbox>
        <Checkbox value={3}>第三个</Checkbox>
        <Checkbox value={4}>第四个</Checkbox>
      </CheckboxGroup>
    )
  }
}
/* sourceCode:end */

Group.title = '组合Checkbox'
Group.desc = `> 例子为使用一组Checkbox`

export default Group
