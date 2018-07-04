/* sourceCode:start */
import React, { PureComponent } from 'react'
import { Select } from 'react-impression'

class Clearable extends PureComponent {
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
      <Select
        value={this.state.value}
        onChange={this.onChange}
        clearable
        filterable
      >
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

Clearable.title = '可清除的筛选'
Clearable.desc = `> 选中项不为空时可以清除选项`

export default Clearable
