import React from 'react'
import { Table } from 'react-impression'

// MOCK 数据
const getData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      rank: `${index + 1}`,
      name: '员工',
      income: 2121,
      origin: '小程序报名',
    }
  })
}

const columns = [
  { prop: 'rank', Header: '排名' },
  { prop: 'name', Header: '名字' },
  { prop: 'income', Header: '收入' },
  { prop: 'origin', Header: '来源' },
]

export default class CustomTable extends React.Component {
  render() {
    const dataSource = getData()

    return <Table data={dataSource} columns={columns} stripe />
  }
}
