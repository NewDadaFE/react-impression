/* sourceCode:start */
import React, { PureComponent } from 'react'
import { Select } from 'react-impression'

class Basic extends PureComponent {
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
        },
      ],
      value: '',
    }
  }

  onChange = e => {
    this.setState({
      value: e,
    })
  }

  render() {
    return (
      <Select value={this.state.value} onChange={this.onChange}>
        {this.state.options.map(el => {
          return (
            <Select.Option key={el.value} label={el.label} value={el.value} />
          )
        })}
      </Select>
    )
  }
}
/* sourceCode:end */

Basic.title = '基本用法'
Basic.desc = `> 最简单的Select`

export default Basic
