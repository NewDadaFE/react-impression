import React from 'react'
import { InputGroup, InputGroupButton, InputGroupInput } from 'react-impression'

class CounterContainer extends React.Component {
  state = {
    val: 0,
  }

  increase = () => this.change(this.state.val + 1)

  decrease = () => this.change(this.state.val - 1)

  change = val => {
    const valToSet = +val

    if (!Number.isInteger(valToSet) || valToSet < 0) return

    this.setState({
      val: valToSet,
    })
  }

  render() {
    return (
      <InputGroup>
        <InputGroupButton theme='default' onClick={this.decrease}>
          -
        </InputGroupButton>
        <InputGroupInput
          value={this.state.val}
          placeholder='请输入加价价格'
          onChange={event => this.change(event.target.value)}
        />
        <InputGroupButton theme='default' onClick={this.increase}>
          +
        </InputGroupButton>
      </InputGroup>
    )
  }
}

export default CounterContainer
