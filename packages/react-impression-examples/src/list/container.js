import React, { Component } from 'react'
import Option from './components/Option'
import { Table } from 'react-impression'
import './container.module.scss'

class List extends Component {
  state = {
    list: {},
    option: {},
  }

  columns = [
    {
      Header: 'ID',
      prop: 'id',
    },
    {
      Header: '城市',
      prop: 'cityName',
    },
  ]

  render() {
    return (
      <div styleName='container'>
        <Option />
        <Table data={[]} columns={this.columns} />
      </div>
    )
  }
}

export default List
