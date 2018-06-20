/* sourceCode:start */
import React, { PureComponent } from 'react'
import { Select } from 'react-impression'

class OptionGroup extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      options: [
        {
          label: '热门景点',
          disabled: true,
          options: [
            {
              value: 'waitan',
              label: '外滩',
            },
            {
              value: 'dongfangmingzhu',
              label: '东方明珠',
            },
          ],
        },
        {
          label: '其它景点',
          options: [
            {
              value: 'tianzifang',
              label: '田子坊',
            },
            {
              value: 'yuyuan',
              label: '豫园',
            },
            {
              value: '1933',
              label: '老场坊',
            },
            {
              value: 'lujiazui',
              label: '陆家嘴',
            },
          ],
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
        {this.state.options.map(group => {
          return (
            <Select.OptionGroup
              key={group.label}
              label={group.label}
              disabled={group.disabled}
            >
              {group.options.map(el => {
                return (
                  <Select.Option
                    key={el.value}
                    label={el.label}
                    value={el.value}
                  >
                    <span style={{ float: 'left' }}>{el.label}</span>
                    <span
                      style={{ float: 'right', color: '#1c89ea', fontSize: 13 }}
                    >
                      {el.value}
                    </span>
                  </Select.Option>
                )
              })}
            </Select.OptionGroup>
          )
        })}
      </Select>
    )
  }
}
/* sourceCode:end */

OptionGroup.title = '分组显示'
OptionGroup.desc = `> 筛选框备选项进行分组展示`

export default OptionGroup
