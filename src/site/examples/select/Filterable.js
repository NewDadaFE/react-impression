/* sourceCode:start */
import React, { PureComponent } from 'react'
import { Select } from 'react-impression'

class Filterable extends PureComponent {
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
        {
          value: '选项5',
          label: '烧雏鸡',
        },
        {
          value: '选项6',
          label: '烧子鹅',
        },
        {
          value: '选项7',
          label: '卤煮咸鸭',
        },
      ],
      value1: '',
      value2: '',
    }
  }

  onChange1 = e => {
    this.setState({
      value1: e,
    })
  }

  onChange2 = e => {
    this.setState({
      value2: e,
    })
  }

  render() {
    return (
      <div>
        <Select value={this.state.value1} onChange={this.onChange1} filterable>
          {this.state.options.map(el => {
            return (
              <Select.Option key={el.value} label={el.label} value={el.value} />
            )
          })}
        </Select>
        <Select
          className='offset-l-lg'
          value={this.state.value2}
          onChange={this.onChange2}
          filterable
          filterMethod={(input, option) => input === option || input === ''}
        >
          {this.state.options.map(el => {
            return (
              <Select.Option key={el.value} label={el.label} value={el.value} />
            )
          })}
        </Select>
      </div>
    )
  }
}
/* sourceCode:end */

Filterable.title = '可输入的筛选框'
Filterable.desc = `> 自带input框输入筛选，右侧为自定义筛选函数`

export default Filterable
