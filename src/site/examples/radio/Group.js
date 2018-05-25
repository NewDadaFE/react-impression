/* sourceCode:start */
import React from 'react'
import { Radio } from 'react-impression'
const RadioGroup = Radio.Group

class Group extends React.Component {
  state = {
    value: 2,
  }

  onChange = (value, e) => {
    console.log('radio value is', value)
    this.setState({
      value: value,
    })
  }

  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>第一个</Radio>
        <Radio value={2}>第二个</Radio>
        <Radio value={3}>第三个</Radio>
        <Radio value={4}>第四个</Radio>
      </RadioGroup>
    )
  }
}
/* sourceCode:end */

Group.title = '组合radio'
Group.desc = `> 例子为使用一组互斥的Radio，除此之外可以为 RadioGroup 配置 name 参数，组合内的 input 元素会有相同的 name 属性，浏览器会自动将这组Radio变为单选`

export default Group
