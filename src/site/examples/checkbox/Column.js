/* sourceCode:start */
import React from 'react'
import { Checkbox } from 'react-impression'
const CheckboxGroup = Checkbox.Group

class Column extends React.Component {
  state = {
    value: [2, 3],
  }

  onChange = (value, e) => {
    console.log('checkbox value is', value)
    this.setState({
      value: value,
    })
  }

  render() {
    return (
      <CheckboxGroup
        onChange={this.onChange}
        value={this.state.value}
        direction='column'
      >
        <Checkbox value={1}>第一个</Checkbox>
        <Checkbox value={2}>第二个</Checkbox>
        <Checkbox value={3}>第三个</Checkbox>
        <Checkbox value={4}>第四个</Checkbox>
      </CheckboxGroup>
    )
  }
}
/* sourceCode:end */

Column.title = '垂直方向的CheckboxGroup'
Column.desc = `> 根据传入direction的值来决定CheckboxGroup排列方向`

export default Column
