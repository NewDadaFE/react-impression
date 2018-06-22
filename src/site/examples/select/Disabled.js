/* sourceCode:start */
import React, { PureComponent } from 'react'
import { Select } from 'react-impression'

class Disabled extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      options: [
        {
          value: '选项1',
          label: '蒸羊羔',
        },
        {
          value: '选项2',
          label: '蒸熊掌',
          disabled: true,
        },
        {
          value: '选项3',
          label: '蒸鹿尾儿',
        },
        {
          value: '选项4',
          label: '烧花鸭',
        },
        {
          value: '选项5',
          label: '烧雏鸡',
          disabled: true,
        },
      ],
      value: '选项3',
    }
  }

  onChange = e => {
    this.setState({
      value: e,
    })
  }

  render() {
    return (
      <div>
        <Select value={this.state.value} onChange={this.onChange} disabled>
          {this.state.options.map(el => {
            return (
              <Select.Option key={el.value} label={el.label} value={el.value} />
            )
          })}
        </Select>
        <Select
          value={this.state.value}
          onChange={this.onChange}
          className='offset-l-lg'
        >
          {this.state.options.map(el => {
            return (
              <Select.Option
                key={el.value}
                label={el.label}
                value={el.value}
                disabled={el.disabled}
              />
            )
          })}
        </Select>
      </div>
    )
  }
}
/* sourceCode:end */

Disabled.title = '不可用筛选框'
Disabled.desc = `> 筛选框整体不可用 && 有不可用选项`

export default Disabled
