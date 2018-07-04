/* eslint-disable react/jsx-no-bind */
/* sourceCode:start */
import React, { PureComponent } from 'react'
import { Radio } from 'react-impression'

class RadioBasic extends PureComponent {
  onChange(event) {
    console.log(event.target.checked, this.refs.radio.getValue())
  }

  render() {
    return (
      <div>
        <Radio ref='radio' onChange={this.onChange.bind(this)}>
          Radio
        </Radio>
      </div>
    )
  }
}
/* sourceCode:end */

RadioBasic.title = '基本用法'
RadioBasic.desc = `> 最简单的radio`

export default RadioBasic
