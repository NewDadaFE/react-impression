import React, { Component } from 'react'
import Option from './components/Option'
import Edit from './components/Edit'
import { Table, Confirm, Split } from 'react-impression'
import { data, cityList } from './config'
import './container.module.scss'

class List extends Component {
  state = {
    list: {
      result: data,
      totalPage: 1,
      activePage: 1,
    },
    option: {},
    showEdit: false,
    showDelete: false,
  }

  setOption = (path, value) => {
    this.setState({
      option: {
        ...this.state.option,
        [path]: value,
      },
    })
  }

  toggleShowEdit = () => {
    this.setState({
      showEdit: !this.state.showEdit,
    })
  }

  toggleShowDelete = () => {
    this.setState({
      showDelete: !this.state.showDelete,
    })
  }

  searchList = () => {}

  render() {
    const { list, showEdit, showDelete } = this.state

    const columns = [
      {
        prop: 'id',
        Header: ' 任务ID',
      },
      { prop: 'cityName', Header: '城市' },
      { prop: 'taskName', Header: '任务名称', width: 120 },
      { prop: 'source', Header: '数据来源' },
      { prop: 'type', Header: '任务类型' },
      { prop: 'taskObject', Header: '任务对象' },
      { prop: 'result', Header: '任务结果' },
      { prop: 'date', Header: '任务期间' },
      { prop: 'num', Header: '任务对象数' },
      {
        prop: 'id',
        Header: '操作',
        width: 150,
        Cell: value => {
          return (
            <div className='text-center'>
              <a href='javascript:;' onClick={this.toggleShowEdit}>
                编辑
              </a>
              <Split />
              <a href='javascript:;' onClick={this.toggleShowDelete}>
                删除
              </a>
            </div>
          )
        },
      },
    ]

    const pagination = {
      onSelect: this.searchList,
      activePage: list.activePage,
      totalPage: list.totalPage,
      scope: 4,
    }

    return (
      <div styleName='container'>
        <Option
          cityList={cityList}
          set={this.setOption}
          search={this.searchList}
        />
        <Table data={list.result} columns={columns} pagination={pagination} />
        <Edit show={showEdit} toggle={this.toggleShowEdit} />
        {showDelete && (
          <Confirm
            type='danger'
            onOkClick={this.toggleShowDelete}
            onCancelClick={this.toggleShowDelete}
          >
            您确定删除该记录？
          </Confirm>
        )}
      </div>
    )
  }
}

export default List
