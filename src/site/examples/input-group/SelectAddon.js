/* sourceCode:start */
import React, { PureComponent } from 'react'
import { InputGroup, Row, Col, Input, Select } from 'react-impression'

class SelectAddon extends PureComponent {
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
      <Row gutter={12}>
        <Col>
          <InputGroup style={{ width: '500px' }}>
            <Select value={this.state.value} onChange={this.onChange}>
              {this.state.options.map(el => {
                return (
                  <Select.Option
                    key={el.value}
                    label={el.label}
                    value={el.value}
                  />
                )
              })}
            </Select>
            <Input placeholder='something' />
          </InputGroup>
        </Col>
      </Row>
    )
  }
}
/* sourceCode:end */

SelectAddon.title = 'inputGroup内的select'
SelectAddon.desc = `> 子元素加入Select组件`

export default SelectAddon
