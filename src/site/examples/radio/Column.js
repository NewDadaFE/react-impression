/* sourceCode:start */
import React from 'react'
import { Radio } from 'react-impression'
const RadioGroup = Radio.Group

class Column extends React.Component {
  state = {
    value: 1,
  }

  onChange = (value, e) => {
    console.log('radio value is', value)
    this.setState({
      value: value,
    })
  }

  render() {
    return (
      <RadioGroup
        onChange={this.onChange}
        value={this.state.value}
        direction='column'
      >
        <Radio value={1}>第一个</Radio>
        <Radio value={2}>第二个</Radio>
        <Radio value={3}>第三个</Radio>
        <Radio value={4}>第四个</Radio>
      </RadioGroup>
    )
  }
}
/* sourceCode:end */

Column.title = '垂直方向的RadioGroup'
Column.desc = `> 根据传入direction的值来决定RadioGroup排列方向`

export default Column
