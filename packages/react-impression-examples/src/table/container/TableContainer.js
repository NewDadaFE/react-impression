import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Card, Table, Split } from 'react-impression'
import * as actions from '../reducer'
import { data } from '../config'

class Filter extends Component {
  static propTypes = {
    // cityId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    setCityId: PropTypes.func,
  }
  state = {
    selectedRowKeys: [1],
    activePage: 1,
  }

  handleCityChange = val => {
    const { setCityId } = this.props
    setCityId(val)
  }
  handelOnSelect = (status, index) => {
    if (status) {
      const { selectedRowKeys } = this.state
      this.setState({
        selectedRowKeys: [...selectedRowKeys, index],
      })
    } else {
      const { selectedRowKeys } = this.state
      this.setState({
        selectedRowKeys: selectedRowKeys.filter(item => Number(item) !== index),
      })
    }
  }
  handleOnSelectAll = (checkAll, selectedRowKeys) => {
    if (checkAll) {
      this.setState({
        selectedRowKeys: [],
      })
    } else {
      this.setState({
        selectedRowKeys: data.map((item, index) => index),
      })
    }
  }

  render() {
    const { selectedRowKeys, activePage } = this.state
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
        fixed: 'right',
        width: 150,
        Cell: value => {
          return (
            <div className='text-center'>
              <a
                href='#'
                style={{ paddingRight: 16, color: '#276BF2', height: 18 }}
                onClick={() => {
                  console.log(value)
                }}
              >
                查看
              </a>
              <Split />
              <a href='#' style={{ paddingLeft: 16, color: '#276BF2' }}>
                编辑
              </a>
            </div>
          )
        },
      },
    ]
    const rowSelection = {
      selectedRowKeys: selectedRowKeys,
      onChange: this.handleChange,
      onSelect: this.handelOnSelect,
      onSelectAll: this.handleOnSelectAll,
    }
    const pagination = {
      scope: 4,
      onSelect: this.handlePage,
      totalPage: 1,
      activePage: activePage,
    }
    return (
      <Card block>
        <Table
          rowSelection={rowSelection}
          pagination={pagination}
          columns={columns}
          data={data.wuliu}
          scroll={{ x: 1200 }}
        />
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  cityId: state.table.cityId,
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
