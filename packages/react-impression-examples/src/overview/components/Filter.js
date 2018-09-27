import React from 'react'
import { Select, Input, Card, CardBlock } from 'react-impression'

export default class Filter extends React.Component {
  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  /**
   * Select 发生改变的时候触发的回调
   */
  handleSelectChange = value => {
    console.log('handleSelectChange:', value)
  }

  /**
   * DatePicker 发生改变的时候触发的回调
   */
  handleDatePickerChange = value => {
    console.log('handleDatePickerChange:', value)
  }

  render() {
    return (
      <Card className='offset-t'>
        <CardBlock>
          <Select
            style={{ width: 200 }}
            onChange={this.handleSelectChange}
            defaultValue=''
            placeholder='请选择部门'
          >
            <Select.Option value='frontend'>前端部门</Select.Option>
            <Select.Option value='backend'>后端部门</Select.Option>
            <Select.Option value='test'>测试部门</Select.Option>
          </Select>
          <Input
            type='date'
            style={{ width: 224 }}
            className='pull-right'
            placeholder='请选择日期'
            onChange={this.handleDatePickerChange}
          />
        </CardBlock>
      </Card>
    )
  }
}
