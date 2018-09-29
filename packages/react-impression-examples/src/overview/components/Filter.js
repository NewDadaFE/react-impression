import React from 'react'
import { Select, SelectOption, Input, Card, CardBlock } from 'react-impression'

export default class Filter extends React.Component {
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
            <SelectOption value='frontend'>前端部门</SelectOption>
            <SelectOption value='backend'>后端部门</SelectOption>
            <SelectOption value='test'>测试部门</SelectOption>
          </Select>
          <Input
            type='date'
            style={{ width: 224 }}
            className='offset-l-lg'
            placeholder='请选择日期'
            onChange={this.handleDatePickerChange}
          />
        </CardBlock>
      </Card>
    )
  }
}
