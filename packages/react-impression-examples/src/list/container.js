import React, { Component } from 'react'
import Option from './components/Option'
import { data, cityList } from './config'
import TableContainer from './containers/TableContainer'
import './container.module.scss'

class List extends Component {
  state = {
    list: {
      result: data,
      totalPage: 1,
      activePage: 1,
    },
    option: {},
  }

  setOption = (path, value) => {
    this.setState({
      option: {
        ...this.state.option,
        [path]: value,
      },
    })
  }

  searchList = () => {}

  render() {
    const { list } = this.state

    return (
      <div styleName='container'>
        <Option
          cityList={cityList}
          set={this.setOption}
          search={this.searchList}
        />
        <TableContainer list={list} search={this.searchList} />
      </div>
    )
  }
}

export default List
