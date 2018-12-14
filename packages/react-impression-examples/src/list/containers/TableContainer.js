import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Confirm, Split, Card, Button } from 'react-impression'
import Edit from '../components/Edit'

class List extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    search: PropTypes.func.isRequired,
  }

  state = {
    showEdit: false,
    showDelete: false,
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

  deleteListInfo = () => {
    this.toggleShowDelete()
    this.props.search()
  }

  render() {
    const { showEdit, showDelete } = this.state
    const { list } = this.props

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
      <div>
        <Card block>
          <Card outline='none'>
            <Button theme='default'>启用</Button>
            <Button theme='default' className='offset-l-lg'>
              停用
            </Button>
          </Card>
          <Table data={list.result} columns={columns} pagination={pagination} />
        </Card>
        <Edit show={showEdit} toggle={this.toggleShowEdit} />
        {showDelete && (
          <Confirm
            type='danger'
            onOkClick={this.deleteListInfo}
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
