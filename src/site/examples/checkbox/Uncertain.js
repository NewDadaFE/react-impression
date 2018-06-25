/* sourceCode:start */
import React, { Component } from 'react'
import { Checkbox } from 'react-impression'

const Group = Checkbox.Group

const options = ['number1', 'number2', 'number3', 'number4']
const optionsCheckedDefault = ['number1', 'number3']

class Uncertain extends Component {
  state = {
    checkedList: optionsCheckedDefault,
    uncertain: true,
    checkAll: false,
  }

  onChange = checkedList => {
    this.setState({
      checkedList,
      uncertain: !!checkedList.length && checkedList.length < options.length,
      checkAll: checkedList.length === options.length,
    })
  }

  onCheckAllChange = (event, value) => {
    const { target } = event

    this.setState({
      checkedList: target.checked ? options : [],
      uncertain: false,
      checkAll: target.checked,
    })
  }

  render() {
    return (
      <div>
        <div className='offset-b-lg'>
          <Checkbox
            uncertain={this.state.uncertain}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            全选
          </Checkbox>
        </div>
        <Group value={this.state.checkedList} onChange={this.onChange}>
          {options.map((each, index) => {
            return (
              <Checkbox value={each} key={index}>
                {each}
              </Checkbox>
            )
          })}
        </Group>
      </div>
    )
  }
}

/* sourceCode:end */

Uncertain.title = '全选效果'
Uncertain.desc = `> 在实现全选效果时，你可能会用到 uncertain 属性`

export default Uncertain
